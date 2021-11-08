import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { ProductEditionComponent } from './product-edition/product-edition.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RemoveProductComponent } from './remove-product/remove-product.component';

const routes: Routes = [
  {
    path: "product-creation",
    component: ProductCreationComponent
  },
  {
    path: "product-edition",
    component: ProductEditionComponent
  },
  {
    path: "product-list",
    component: ProductListComponent
  },
  {
    path: "remove-product",
    component: RemoveProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
