import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(`${this.userUrl}/api/users`)
  }

  addUser(data:any){
    return this.http.post(`${this.userUrl}/api/users`,data)
  }

  delUser(id:any){
    return this.http.delete(`${this.userUrl}/api/users{}${id}`)
  }
}
