import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { ProductEditionComponent } from './product-edition/product-edition.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductImagesComponent } from './product-images/product-images.component';
import { RemoveProductComponent } from './remove-product/remove-product.component';


@NgModule({
  declarations: [
    ProductCreationComponent,
    ProductEditionComponent,
    ProductListComponent,
    ProductImagesComponent,
    RemoveProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
