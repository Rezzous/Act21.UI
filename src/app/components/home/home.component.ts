import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private jwtHelper: JwtHelperService, private router: Router) { }

  ngOnInit(): void {
  }

  // isUserAuthenticated = () :boolean => {
  //   const token = localStorage.getItem("jwt");
  //   if (token && !this.jwtHelper.isTokenExpired(token)) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

  // logOut = () => {
  //   localStorage.removeItem("jwt");
  // }

}
