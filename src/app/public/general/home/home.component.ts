import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { ProductModel } from 'src/app/models/product/product.model';
import { ProductService } from 'src/app/services/product/product.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url: string= GeneralData.BUSSINESS_URL;
  productList: ProductModel[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.GetProductList()
  }

  GetProductList() {
    this.productService.GetRecordList().subscribe({
      next: (data: ProductModel[]) => {
        this.productList = data;
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.HOME_ERROR_MESSAGE)
      }
    });
  }

}
