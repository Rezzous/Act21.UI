import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


import { NgForm } from '@angular/forms';
import { AuthenticatedResponse, LoginModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean = true;
  credentials: LoginModel = {email:'', password:''};

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  login = ( form: NgForm) => {
    if (form.valid) {
      this.http.post<AuthenticatedResponse>("https://localhost:7062/api/auth/login", this.credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json"})
      })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
          const token = response.token;
          localStorage.setItem("jwt", token); 
          this.invalidLogin = false; 
          this.router.navigate(["/"]);
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      })
    }
  }
}



// import { Router } from '@angular/router';
// import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { AuthenticatedResponse, LoginModel } from 'src/app/models/login.model';
// import { NgForm } from '@angular/forms';
// import { User } from 'src/app/models/user.model';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// export class LoginComponent implements OnInit {
//   invalidLogin: boolean = true;
//   // credentials: User = {id: '', firstName: '', lastName: '', email:'', password:'', role:''};
//   credentials: LoginModel= {email: '', password:''};
//   constructor(private router: Router, private http: HttpClient) { }
  
//   ngOnInit(): void {
    
//   }
//   login = ( form: NgForm) => {
//     if (form.valid) {
//       this.http.post<AuthenticatedResponse>("https://localhost:7062/api/Auth/login", this.credentials, {
//         headers: new HttpHeaders({ "Content-Type": "application/json"})
//       })
//       .subscribe({
//         next: (response: AuthenticatedResponse) => {
//           const token = response.token;
//           const refreshToken = response.refreshToken;
//           localStorage.setItem("jwt", token);
//           localStorage.setItem("refreshToken", refreshToken);
//           this.invalidLogin = false; 
//           this.router.navigate(["/"]);
//         },
//         error: (err: HttpErrorResponse) => this.invalidLogin = true
//       })
//     }
//   }
// }




// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   baseApiUrl : string = environment.baseApiUrl;

//   invalidLogin : boolean = true;

//   constructor(private router : Router, private http : HttpClient) { }

//   ngOnInit(): void {
//   }

//   login(form : NgForm) {
//     const credentials = {
//       'username' : form.value.username,
//       'password' : form.value.password
//     }

//     this.http.post(this.baseApiUrl + '/auth/login', credentials)
//     .subscribe(response => {
//       const token = (<any>response).token;
//       localStorage.setItem('jwt', token);
//       this.invalidLogin = false;
//       this.router.navigate(['/']);
//     }, err => {
//       this.invalidLogin = true;
//     })
//   }

// }
