import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addUserRequest : User = {
    id : '',
    firstName : '',
    lastName: '',
    email: '',
    password: '',
    role: 'user'
  }

  constructor(private userService : UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  addUser(form: NgForm){
    this.userService.addUser(this.addUserRequest)
    .subscribe({
      next : (user) => {
        this.router.navigate(['login'])
      }
    })
  }


}
