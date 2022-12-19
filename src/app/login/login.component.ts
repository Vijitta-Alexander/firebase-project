import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseServiceService } from '../service/firebase-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  issignin=false;
  email:string='';
  password:string='';
  constructor(private firebaseservice:FirebaseServiceService,private router:Router){}
  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.issignin = true;
    }
    else {
      this.issignin = false;
    }
  }
  async onLogin() {
    console.log(this.email)
    this.firebaseservice.login(this.email, this.password).then(res => {
      this.router.navigate(['dashboard']);
    }
    );
  }
}
