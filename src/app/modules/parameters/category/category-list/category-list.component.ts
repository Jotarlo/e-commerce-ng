import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { CategoryModel } from 'src/app/models/parameters/category.model';
import { CategoryService } from 'src/app/services/parameters/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  pageSize: number = GeneralData.RECORDS_BY_PAGE;
  p: number = 1;
  total: number = 0;
  recordList: CategoryModel[] = [];


  constructor(
    private service: CategoryService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList() {
    this.service.GetRecordList().subscribe({
      next: (data: CategoryModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    });
  }

}