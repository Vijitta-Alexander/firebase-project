import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from './service/firebase-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'firebase-project';
  issignin=false;
  constructor(private firebaseservice:FirebaseServiceService) {}

  ngOnInit(): void {
   if(localStorage.getItem('user')!==null){
    this.issignin=true;
   } 
   else{
    this.issignin=false;
   }
  }
  // async OnSignup(email:string,password:string){
  //   this.firebaseservice.signup(email,password);
  //   if(this.firebaseservice.isLoggedin){
  //     this.issignin=true;
  //   }
    
  // }
  // async onLogin(email:string,password:string){
  //   this.firebaseservice.login(email,password);
  //   if(this.firebaseservice.isLoggedin){
  //     this.issignin=true;
  //   }
    
  // }
  handlelogout(){
    this.issignin=false;
  }

}
