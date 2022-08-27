import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseApiUrl : string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.baseApiUrl + '/api/users')
  }

  getUser(id : string) : Observable<User>{
    return this.http.get<User>(this.baseApiUrl + '/api/users/' + id)
  }

  addUser(addUserRequest : User) : Observable<User>{
    addUserRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<User>(this.baseApiUrl + '/api/users', addUserRequest)
  }

  updateUser(id : string, updateUserRequest : User) : Observable<User>{
    return this.http.put<User>(this.baseApiUrl + '/api/users/' + id, updateUserRequest)
  }

  deleteUser(id : string) : Observable<User>{
    return this.http.delete<User>(this.baseApiUrl + '/api/users/' + id)
  }
  
}
