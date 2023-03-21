import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // showBtn = false; 
  constructor(private service:AuthService){}
  
  logged(){
    if(this.service.isloggedin()){
      return true;
    }
    else{
      return false;
    }
  } 
  sessionlogout(){
    sessionStorage.clear();
  }
}