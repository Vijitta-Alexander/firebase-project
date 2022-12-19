import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseServiceService } from '../service/firebase-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  issignin=false;
  email:string='';
  password:string='';
  constructor(private firebaseservice:FirebaseServiceService, private router:Router) {
    console.log(this.issignin);
    if(localStorage.getItem('user')!==null){
      this.issignin=true;
     } 
     else{
      this.issignin=false;
     }
  }

  ngOnInit(): void {
   if(localStorage.getItem('user')!==null){
    this.issignin=true;
   } 
   else{
    this.issignin=false;
   }
  }
  async OnSignup(){
    this.firebaseservice.signup(this.email,this.password).then( res => {
      this.router.navigate(['login']);
    }
    );
    
    if(this.firebaseservice.isLoggedin){
      this.issignin=true;
      // this.router.navigate(['dashboard']);
    }
    // console.log(this.email);
    // console.log(this.password);
  }

}
