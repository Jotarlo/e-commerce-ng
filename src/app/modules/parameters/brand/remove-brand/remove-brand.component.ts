import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { BrandModel } from 'src/app/models/parameters/brand.model';
import { BrandService } from 'src/app/services/parameters/brand.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-remove-brand',
  templateUrl: './remove-brand.component.html',
  styleUrls: ['./remove-brand.component.css']
})
export class RemoveBrandComponent implements OnInit {
  id: number = 0;
  name: string = "";

  constructor(
    private router: Router,
    private service: BrandService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: BrandModel) => {
        if (data.id && data.name) {
          this.id = data.id;
          this.name = data.name;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: BrandModel) => {
        OpenGeneralMessageModal(GeneralData.REMOVED_MESSAGE);
        this.router.navigate(["/parameters/brand-list"]);
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_MESSAGE);
      }
    });
  }

}
