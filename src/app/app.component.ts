import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Act21.UI';

  constructor(private jwtHelper: JwtHelperService) { }

  isUserAuthenticated= () :boolean => {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

  logOut = () => {
    localStorage.removeItem("jwt");
    // localStorage.removeItem("refreshToken");
  }
}
