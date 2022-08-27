import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JwtHelperService, JwtModule, JWT_OPTIONS  } from '@auth0/angular-jwt';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { LoginComponent } from './components/session/login/login.component';
import { RegisterComponent } from './components/session/register/register.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/session/logout/logout.component';
import { AuthGuard } from './components/guard/authGuard';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    LoginComponent,
    RegisterComponent,
    AddUserComponent,
    EditUserComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7062"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [AuthGuard],
  
  
  // providers: [
  //   { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  //       JwtHelperService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
