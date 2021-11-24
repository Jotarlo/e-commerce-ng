import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { UnauthenticatedGuard } from 'src/app/guards/unauthenticated.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RemoveUserComponent } from './user/remove-user/remove-user.component';
import { UserCreationComponent } from './user/user-creation/user-creation.component';
import { UserEditionComponent } from './user/user-edition/user-edition.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path:"logout",
    component: LogoutComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"change-password",
    component: ChangePasswordComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"reset-password",
    component: ResetPasswordComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path:"user-creation",
    component: UserCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"user-edition",
    component: UserEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"user-list",
    component: UserListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"remove-user",
    component: RemoveUserComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
