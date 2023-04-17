import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { blogData } from '../dash/dash.model';
import { AuthService } from '../service/auth.service';
import { BlogsService } from '../service/blogs.service';

@Component({
  selector: 'app-admin-con',
  templateUrl: './admin-con.component.html',
  styleUrls: ['./admin-con.component.css']
})
export class AdminConComponent implements OnInit{
  formvalue!: FormGroup;
  blogModelobj:blogData = new blogData;
  // GetAlls:any;
  Getblog:any;
  p:number=1;
  itemsPerPage:number=4;
  totalBlog:any;
  data:any;
  userName:any;
  display:any;
  blogid:any;
  constructor(private dis:AuthService, private form:FormBuilder, private blog:BlogsService)
  {
    dis.Getblog().subscribe((display)=>
    {
      // console.warn("display",display)
      console.log(display);
      this.Getblog=display;
      console.log(this.Getblog.length);
      this.totalBlog = this.Getblog.length / this.itemsPerPage;
      // this.totalBlog=display.length;
      // console.log(this.Getblog);
      
    }
    );
  }
  ngOnInit(): void {
    this.formvalue = this.form.group({
    username: [''],
    // role: [''],
    // Password: [''],
    title: [''],
    description: [''],
    url: ['']
  })

}
  refresh(){
    this.dis.Getblog().subscribe((data)=>{
      this.Getblog=data;
    });
  }

  addedBlog(){
    this.blogModelobj.username = this.formvalue.value.username;
    // this.blogModelobj.role = this.formvalue.value.role;
    // this.blogModelobj.Password = this.formvalue.value.Password;
    this.blogModelobj.title= this.formvalue.value.title;
    this.blogModelobj.description= this.formvalue.value.description;
    this.blogModelobj.url= this.formvalue.value.url;
    
    this.blog.addBlog(this.blogModelobj).subscribe(res=>{
      console.log(res);
      alert("New Data added");
      this.formvalue.reset();
      this.refresh();
    })
  }

  delBlogs(data:any){
    this.dis.deleteBlgs(data.id).subscribe(res=>{
      alert("Data deleted");
      console.log(res);
      this.formvalue.reset();
      this.refresh();
    })
  }

  editBlogs(data:any){
    this.blogid=data.id;
    
    this.formvalue.controls['username'].setValue(data.username);
    this.formvalue.controls['title'].setValue(data.title);
    this.formvalue.controls['description'].setValue(data.description);
    this.formvalue.controls['url'].setValue(data.url);

  }
  editBlogsonedit(data:any){
    console.log(data);
    
    // this.blogModelobj.title=data.title;
    // this.blogModelobj.description=data.description;
    // this.blogModelobj.url=data.url;
      this.dis.editblog(data,this.blogid).subscribe((res)=>{
      console.log(res);
      alert("Data updated successfully");
      this.display=res;
      this.refresh();
    })
    
  }

}

