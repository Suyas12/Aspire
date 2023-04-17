import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  blogUrl = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  getBlog(){
    return this.http.get(`${this.blogUrl}/api/users`)
  }
  getBlogbyUserName(username: any) {
    // let username = 'user';
    // let password = 'user  ';

    const headers = new HttpHeaders({ Authorization: 'Basic '})
    return this.http.get(`${this.blogUrl + "/api/blog"}/${username}`, { headers: headers });
  }

  
  addBlog(data:any){
    return this.http.post(`${this.blogUrl}/api/users`,data)
  }

  // updateBlog(){
  //   return this.http.put(`${this.updateBlog}`)
  // }

  // delBlog(id:any){
  //   return this.http.delete(`${this.blogUrl}/api/users{}${id}`)
  // }
}
