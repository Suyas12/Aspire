import { HttpClient } from '@angular/common/http';
import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormControl, FormGroup } from '@angular/forms'
import { LoginService } from '../service/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  
  ispersonlog: any = false;
  showData: any;
  userdata: any;
  role: any;
  username: any;
  token:any;
  credentials = {
    username: '',
    password: ''
  }
  loginForm = new FormGroup({
    username: new FormControl(''),
    role: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private auth: AuthService, private router: Router, private http: HttpClient, private loginService: LoginService,  private jwtHelper: JwtHelperService) {
    // this.GetDetails();
  }
  // GetDetails() {
  //   this.auth.GetAll().subscribe((result) => {
  //     this.showData = result;
  //     console.log(this.showData);
  //   }
  //   )
  // }
  gotoLogin(username: any, password: any) {
    // this.GetDetails();
    console.log(username + '/' + password);
    this.http.get('http://localhost:8080/api/users').subscribe(res => {
      this.userdata = res;
      console.log(this.userdata);

      this.userdata.forEach((element: any) => {
        console.log(element);

        if (element.role == 'admin' && element.password == password
          && element.username == username
        ) {
          sessionStorage.setItem('user', JSON.stringify(element));
          alert("Login Successfully");
          this.router.navigate(['/dash']);
          this.ispersonlog = true;
          // this.loginService.generateToken(this.credentials).subscribe(
          //   res=>{
          //     //If Success
          //     console.log(res);

          //   },
          //   error=>{
          //     //If Error
          //     console.log(error);
          //   }
          // )
        }
        else if (element.role == 'user' && element.password == password && element.username == username) {
          // this.auth.isperson(this.ispersonlog);
          console.log(element.username);
          sessionStorage.setItem('username', element.username);
          sessionStorage.setItem('user', JSON.stringify(element));
          alert("Login Successfully");
          this.router.navigate(['/user.dash']);
          this.ispersonlog = true;
        }
      })
      // this.e();
    })


  }

  e() {
    if (this.ispersonlog == false) {
      alert("Invalid credentials");
      // console.log(this.loginForm.value.Password);

    }
  }
  goLogin() {
    console.log("Form is submitted");
    {
      console.log("Submit");
      //token generate
      this.loginService.generateToken(this.loginForm.value).subscribe((data: any) => {
        console.log(data.token);
        this.loginService.loginUser(data.token);
        this.token = localStorage.getItem('token');
        const decodedToken = this.jwtHelper.decodeToken(this.token);
        this.username = decodedToken.sub;
        this.role = decodedToken.role;
        if (this.role === "admin") {
          alert("Admin logged Successfully");
          this.loginForm.reset();
          this.router.navigate(['/dash']);
          // this.ispersonlog = true;
        } else if (this.role === "user") {
          alert("User logged Successfully");
          this.loginForm.reset();
          this.router.navigate(['/user.dash']);
          // this.ispersonlog = true;
        }
      })


    }
  }
}
