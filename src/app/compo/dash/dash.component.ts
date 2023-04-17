import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
import { blogData } from './dash.model';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit{
  formvalue!: FormGroup;
  blogModelobj:blogData = new blogData;
  GetAlls:any;
  data:any;
  apiblg: any;
  blogData: any;
  constructor(private dis:AuthService, private form:FormBuilder, public http:HttpClient, private user:UserService)
  {
    user.getUser().subscribe((display)=>
    {
      // console.warn("display",display)
      console.log(display);
      this.GetAlls=display;
    }
    ); 
  }
  ngOnInit(): void {
    this.formvalue = this.form.group({
    username: [''],
    role: [''],
    password: [''],
    // title: [''],
    // description: [''],
    // url: ['']
  })

}
  refresh(){
    this.dis.GetAlls().subscribe((data)=>{
      this.GetAlls=data;
    });
  }

  addBlog(){
    this.blogModelobj.username = this.formvalue.value.username;
    this.blogModelobj.role = this.formvalue.value.role;
    this.blogModelobj.password= this.formvalue.value.password;
    
    this.user.addUser(this.blogModelobj).subscribe(res=>{
      console.log(res);
      alert("New Data added");
      this.formvalue.reset();
      this.refresh();
    })
  }

  delBlogs(data:any){
    this.dis.deleteBlogs(data.id).subscribe(res=>{
      alert("Data deleted");
      console.log(res);
      this.formvalue.reset();
      this.refresh();
    })
  }
  // onSubmit() {
  //   this.dis.http.put(this.apiblg + '1', this.blogData).subscribe((data: any) => {
  //     console.log('Record updated successfully');
  //   });
  // }
  // editBlogs(data:any){
  //   this.formvalue.controls['Username'].setValue(data.Username);
  //   this.formvalue.controls['role'].setValue(data.role);
  //   this.formvalue.controls['Password'].setValue(data.Password);
  // }
}
