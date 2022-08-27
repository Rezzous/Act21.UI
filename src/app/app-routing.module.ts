import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/guard/authGuard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/session/login/login.component';
import { RegisterComponent } from './components/session/register/register.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'users',
    component: UsersListComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'users/add',
    component: AddUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'users/edit/:id',
    component: EditUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'register',
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
