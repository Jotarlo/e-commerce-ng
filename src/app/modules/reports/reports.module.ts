import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ProductsByBrandComponent } from './products-by-brand/products-by-brand.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';


@NgModule({
  declarations: [
    ProductsByBrandComponent,
    ProductsByCategoryComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
