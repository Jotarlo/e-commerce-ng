import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsByBrandComponent } from './products-by-brand/products-by-brand.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';

const routes: Routes = [
  {
    path: "products-by-brand",
    component: ProductsByBrandComponent
  },
  {
    path: "products-by-category",
    component: ProductsByCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
