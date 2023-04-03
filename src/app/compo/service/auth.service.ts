import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(private http:HttpClient) { }

  isploged:any;
  postBlogs(data:any){
    return this.http.post<any>("http://localhost:3000/user",data).pipe(map((res:any)=>{
      return res;
    }));
  }

  getBlogs(){
    return this.http.get<any>("http://localhost:3000/user").pipe(map((res:any)=>{
      console.log(res);
      
      return res;
    }))
  }
  updateBlogs(data:any,id:number){
    return this.http.delete<any>("http://localhost:3000/user/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  } 

  deleteBlogs(id:number){
    return this.http.delete<any>("http://localhost:3000/user/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteBlgs(id:number){
    return this.http.delete<any>("http://localhost:3000/blog/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
  apiul='http://localhost:3000/user/?role=user';
  apiurl='http://localhost:3000/user';
  apiblg='http://localhost:3000/blog';

  Getblog(){
    return this.http.get(this.apiblg);
  }
  
  GetblogById(code:any){
    return this.http.get(this.apiblg+'/?Username='+`${code}`);
  }
  editblog(blogdata:any,id:any){
    return this.http.put(this.apiblg+'/'+id,blogdata);
  }
  Postblog(code:any){
    return this.http.post(this.apiblg,code);
  }
  GetAlls(){
    return this.http.get(this.apiul);
  }
  // PutAlls(){
  //   return this.http.put(this.apiblg);
  // }
  Getcode(code:any){
    return this.http.get(this.apiul+'/'+code);
  }
  
  GetAll(){
    return this.http.get(this.apiurl);
  }
  Getbycode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }


  isperson(u:any){

    this.isploged=u;
  }

  isloggedin(){
    if(this.isploged==true){
      return true;
    }
    else{
      return false;
    }
  }
}
