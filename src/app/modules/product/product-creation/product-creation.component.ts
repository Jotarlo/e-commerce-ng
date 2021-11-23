import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { BrandModel } from 'src/app/models/parameters/brand.model';
import { CategoryModel } from 'src/app/models/parameters/category.model';
import { ProductModel } from 'src/app/models/product/product.model';
import { UploadedFileModel } from 'src/app/models/product/uploaded.file.model';
import { BrandService } from 'src/app/services/parameters/brand.service';
import { CategoryService } from 'src/app/services/parameters/category.service';
import { ProductService } from 'src/app/services/product/product.service';

declare const OpenGeneralMessageModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {
  categoryList: CategoryModel[] = [];
  brandList: BrandModel[] = [];
  form: FormGroup = new FormGroup({});
  formFile: FormGroup = new FormGroup({});
  url: string= GeneralData.BUSSINESS_URL;
  uploadedFilename?: string = "";
  uploadedFile: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {

    this.CreateForm();
    this.CreateFormFile();
    this.GetOptionsToSelects();
  }

  GetOptionsToSelects() {
    this.brandService.GetRecordList().subscribe(
      {
        next: (data: BrandModel[]) => {
          this.brandList = data;
          setTimeout(() => {
            InitSelectById("selBrand");
          }, 100);
        }
      }
    );

    this.categoryService.GetRecordList().subscribe(
      {
        next: (data: CategoryModel[]) => {
          this.categoryList = data;
          setTimeout(() => {
            InitSelectById("selCategories");
          }, 100);
        }
      }
    );
  }

  CreateForm() {
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      price: ["", [Validators.required]],
      stock: ["", [Validators.required]],
      stars: ["", [Validators.required]],
      discount: ["", [Validators.required]],
      brandId: ["", [Validators.required]],
      categories: ["", [Validators.required]],
      main_image:["", [Validators.required]]
    });
  }

  CreateFormFile(){
    this.formFile = this.fb.group({
      file:["", []]
    });
  }

  SaveRecord() {
    let model = new ProductModel();
    model.name = this.form.controls.name.value;
    model.brandId = this.form.controls.brandId.value;
    model.price = this.form.controls.price.value;
    model.stars = this.form.controls.stars.value;
    model.stock = this.form.controls.stock.value;
    model.discount = this.form.controls.discount.value;
    model.main_image = this.form.controls.main_image.value;
    this.service.SaveRecord(model).subscribe({
      next: (data: ProductModel) => {
        OpenGeneralMessageModal(GeneralData.SAVED_MESSAGE);
        this.router.navigate(["/product/product-list"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_MESSAGE);
      }
    });
  }

  OnchangeInputFile(event: any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.formFile.controls["file"].setValue(file);
    }
  }

  UploadImage(){
    const formData = new FormData();
    formData.append("file", this.formFile.controls["file"].value);
    this.service.UploadFile(formData).subscribe({
      next: (data: UploadedFileModel) =>{
        this.form.controls["main_image"].setValue(data.filename)
        this.uploadedFilename = data.filename;
        this.uploadedFile = true;
      }
    });
  }

}
