import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  isploged: any;
  postBlogs(data: any) {
    return this.http.post<any>("http://localhost:8080/api/users", data).pipe(map((res: any) => {
      return res;
    }));
  }

  getBlogs() {
    return this.http.get<any>("http://localhost:8080/api/users").pipe(map((res: any) => {
      console.log(res);

      return res;
    }))
  }

  getBlogger(username:any) {
    return this.http.get<any>("http://localhost:8080/api/blog/"+username);
  }
  updateBlogs(data: any, id: number) {
    return this.http.post<any>("http://localhost:8080/api/users/" + id, data).pipe(map((res: any) => {
      return res;
    }))
  }

  deleteBlogs(id: number) {
    return this.http.delete<any>("http://localhost:8080/api/users"+"/" + id).pipe(map((res: any) => {
      return res;
    }))
  }
  deleteBlgs(id: number) {
    return this.http.delete<any>("http://localhost:8080/api/blogs").pipe(map((res: any) => {
      return res;
    }))
  }
  apiul = 'http://localhost:8080/api/users/?role=user';
  apiurl = 'http://localhost:8080/api/users';
  apiblg = 'http://localhost:8080/api/blogs';
  apiblgs = 'http://localhost:8080/api/blog';

  Getblog() {
    return this.http.get(this.apiblg);
  }
  GetblogById(code: any) {
    return this.http.get(this.apiblg + '/?username=' + `${code}`);
  }
  editblog(blogdata: any, id: any) {
    return this.http.put(this.apiblg + '/' + id, blogdata);
  }
  Postblog(code: any) {
    return this.http.post(this.apiblg, code);
  }
  GetAlls() {
    return this.http.get(this.apiurl);
  }
  // PutAlls(){
  //   return this.http.put(this.apiblg);
  // }
  Getcode(code: any) {
    return this.http.get(this.apiul + '/' + code);
  }

  GetAll() {
    return this.http.get(this.apiurl);
  }
  Getbycode(code: any) {
    return this.http.get(this.apiurl + '/' + code);
  }


  isperson(u: any) {

    this.isploged = u;
  }

  isloggedin() {
    if (this.isploged == true) {
      return true;
    }
    else {
      return false;
    }
  }
  isLoginUser() {

    if (localStorage.getItem('token') != null) {
      return true;
    }
    else {
      return false;
    }
  }
}
