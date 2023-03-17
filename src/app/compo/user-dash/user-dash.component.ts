import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit{
  
  formvalue!: FormGroup;
  GetAlls:any;
  constructor(private dis:AuthService, private form:FormBuilder)
  {
    dis.GetAlls().subscribe((display)=>
    {
      // console.warn("display",display)
      this.GetAlls=display
    }
    );
  }
  ngOnInit(): void {
    this.formvalue = this.form.group({
    Username: [''],
    role: [''],
    Password: ['']
  })

}
  // refresh(){
  //   this.dis.GetAll().subscribe((data)=>{
  //     this.GetAll=data;
  //   });
  // }

}