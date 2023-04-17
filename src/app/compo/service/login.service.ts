import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080"

  constructor(private http:HttpClient) { }


  //calling a server to generate token 
  generateToken(logindata:any){
    //token generate
    return this.http.post(`${this.url}/token`,logindata)
  }

  //to login the user
  loginUser(token: any)
  {
    localStorage.setItem("token",token)
    return true;
  } 

  //to check if the user is logged in or not
  isLoggedIn()
  {
    let token = localStorage.getItem("token");
    if (token==undefined || token==="" || token==null)
    {
      return false;
    }else{
      return true;
    }
  }

  //to logout the user
  logout()
  {
    localStorage.removeItem("token");
    return true;
  }

  //to get the token
  getToken()
  {
    return localStorage.getItem("token");
  }
}
