import { HttpClient } from '@angular/common/http';
import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  ispersonlog:any=false;
  showData: any;
  loginForm = new FormGroup({
  User: new FormControl(''),
  Password: new FormControl('')
  })

  constructor(private auth: AuthService, private router: Router, private http: HttpClient) {
    this.GetDetails();
  }
  GetDetails() {
    this.auth.GetAll().subscribe((result) => {
      this.showData = result;
      console.log(this.showData);
    }
    )
  }
  gotoLogin() {
    // this.router.navigate(['/dash']);
    this.showData.forEach((element: any) => {
      if (element.role == 'admin' && element.Password == this.loginForm.value.Password && element.Username == this.loginForm.value.User) {
        // showBtn = false; 
        this.ispersonlog=true;
        this.auth.isperson(this.ispersonlog);
        sessionStorage.setItem('user', JSON.stringify(element));
        alert("Login Successfully");
        this.router.navigate(['/dash']);
      }
      else if (element.role == 'user' && element.Password == this.loginForm.value.Password && element.Username == this.loginForm.value.User) {
        this.ispersonlog=true;
        this.auth.isperson(this.ispersonlog);
        console.log(element.Username);
        
        sessionStorage.setItem('username', element.Username); 
        // console.log(this.showData[1]);
        sessionStorage.setItem('user', JSON.stringify(element));
        alert("Login Successfully");
        this.router.navigate(['/user.dash']);
      }

  
      // else{
      //   alert("Invalid credentials");
      //   this.router.navigate(['/']);
      // }
    })
    this.e();
  }
  e(){
    if(this.ispersonlog==false){
      alert("wrong password");
    }
  }
}