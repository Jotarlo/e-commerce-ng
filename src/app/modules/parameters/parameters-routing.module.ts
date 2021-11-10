import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandCreationComponent } from './brand/brand-creation/brand-creation.component';
import { BrandEditionComponent } from './brand/brand-edition/brand-edition.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { RemoveBrandComponent } from './brand/remove-brand/remove-brand.component';
import { CategoryCreationComponent } from './category/category-creation/category-creation.component';
import { CategoryEditionComponent } from './category/category-edition/category-edition.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { RemoveCategoryComponent } from './category/remove-category/remove-category.component';

const routes: Routes = [
  {
    path: "brand-creation",
    component: BrandCreationComponent
  },
  {
    path: "brand-edition/:id",
    component: BrandEditionComponent
  },
  {
    path: "brand-list",
    component: BrandListComponent
  },
  {
    path: "brand-product",
    component: RemoveBrandComponent
  },
  {
    path: "category-creation",
    component: CategoryCreationComponent
  },
  {
    path: "category-edition",
    component: CategoryEditionComponent
  },
  {
    path: "category-list",
    component: CategoryListComponent
  },
  {
    path: "category-product",
    component: RemoveCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
