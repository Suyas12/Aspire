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

  loadBlogs(){
    this.dis.GetblogById(this.userName).subscribe((display)=>
    {
      // console.warn("display",display)
      this.GetBlog=display;
      console.warn(display);
    }
    );




    // ________________________________________
    // this.service.Getall().subscribe(res => {
    //   this.userlist = res;
    //   this.dataSource = new MatTableDataSource(this.userlist);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });
  }

  addblg(){
    // this.blogModelobj.Username = this.formvalue.value.Username;
    this.blogModelobj.title = this.formvalue.value.title;
    this.blogModelobj.description= this.formvalue.value.description;
    this.blogModelobj.url= this.formvalue.value.url;
    this.blogModelobj.Username= this.userName;
    
    this.dis.Postblog(this.formvalue.value).subscribe(res=>{
      console.log(this.formvalue.value);
      
      this.data = res;
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
}