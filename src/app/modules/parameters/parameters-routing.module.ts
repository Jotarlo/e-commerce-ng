import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
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
    component: BrandCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "brand-edition/:id",
    component: BrandEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "brand-list",
    component: BrandListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "remove-brand/:id",
    component: RemoveBrandComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "category-creation",
    component: CategoryCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "category-edition/:id",
    component: CategoryEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "category-list",
    component: CategoryListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "remove-category/:id",
    component: RemoveCategoryComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
