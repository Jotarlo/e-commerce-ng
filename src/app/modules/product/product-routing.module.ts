import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { ProductEditionComponent } from './product-edition/product-edition.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RemoveProductComponent } from './remove-product/remove-product.component';

const routes: Routes = [
  {
    path: "product-creation",
    component: ProductCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "product-edition",
    component: ProductEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "product-list",
    component: ProductListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "remove-product",
    component: RemoveProductComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
