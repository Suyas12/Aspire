import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  sessionData: any;
  // sessionStorage: any;
  // showBtn = false; 
  constructor(private service:AuthService){
     this.logged();
  }
    
  
  ngOnInit(): void {
    if (sessionStorage.getItem('user')!=null){
      this.sessionData = JSON.parse(sessionStorage.getItem('user')||'');
    }
  }
  
  logged(){
    this.ngOnInit();
    if(sessionStorage.getItem('user')!=null){
      return true;
    } 
    else{
      return false;
    }
  } 

  sessionlogout(){
    this.ngOnInit();
    sessionStorage.clear();
  }
}