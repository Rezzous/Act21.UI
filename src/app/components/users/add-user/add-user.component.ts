import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

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

  addUser(){
    this.userService.addUser(this.addUserRequest)
    .subscribe({
      next : (user) => {
        this.router.navigate(['users'])
      }
    })
  }

}
