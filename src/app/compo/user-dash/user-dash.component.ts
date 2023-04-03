import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { blogData } from './user-dash.model';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit{
  
  formvalue!: FormGroup;
  blogModelobj:blogData = new blogData;
  GetBlog:any;
  data:any;
  userName:any;
  display: any;
  blogid:any;

  constructor(private dis:AuthService, private form:FormBuilder)
  {
    this.userName = sessionStorage.getItem('username');
    this.loadBlogs();
    
  }

  ngOnInit(): void {
    // this.userName = sessionStorage.getItem('username');
    this.formvalue = this.form.group({
    Username: this.userName,
    title: [''],
    description: [''],
    url:['']
  })

}

refresh(){
  location.reload();
}
  loadBlogs(){
    this.dis.GetblogById(this.userName).subscribe((display)=>
    {
      // console.warn("display",display)
      this.GetBlog=display;
      console.warn(display);
    }
    );
  }

  addblg(){
    // this.blogModelobj.Username = this.formvalue.value.Username;
    this.blogModelobj.title = this.formvalue.value.title;
    this.blogModelobj.description= this.formvalue.value.description;
    this.blogModelobj.url= this.formvalue.value.url;
    this.blogModelobj.Username= this.userName;
    
    this.dis.Postblog(this.formvalue.value).subscribe(res=>{
      console.log(this.formvalue.value);
      alert("Data added");
      this.data = res;
      this.refresh();
      // console.log(this.data);
      // if(this.data){
      //   alert("New Data added");
      // }
      
      // this.formvalue.reset();
  })
  // refresh(){
  //   this.dis.GetAll().subscribe((data)=>{
  //     this.GetAll=data;
  //   });
  // }

  }
  delBlogs(data:any){
    this.dis.deleteBlgs(data.id).subscribe(res=>{
      console.log(res);
      alert("Data deleted");
      this.formvalue.reset();
      this.refresh();
    })
  }

  editBlogs(data:any){
    this.blogid=data.id;
    
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