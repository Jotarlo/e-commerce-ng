import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import { HomeComponent } from './public/general/home/home.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "security",
    loadChildren: () => import("./modules/security/security.module").then(x => x.SecurityModule)
  },
  {
    path: "parameters",
    loadChildren: () => import("./modules/parameters/parameters.module").then(x => x.ParametersModule)
  },
  {
    path: "product",
    loadChildren: () => import("./modules/product/product.module").then(x => x.ProductModule)
  },
  {
    path: "reports",
    loadChildren: () => import("./modules/reports/reports.module").then(x => x.ReportsModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
