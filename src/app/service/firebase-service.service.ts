import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
 
  isLoggedin=false;
  constructor(public firebaseAuth:AngularFireAuth) { }

  async login(email:string,password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
      .then(res =>{
        this.isLoggedin=true;
        localStorage.setItem('user',JSON.stringify(res.user));
      })
  }
  async signup(email:string,password:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
      .then(res =>{
        // this.isLoggedin=true;
        // localStorage.setItem('user',JSON.stringify(res.user));
      })
  }
  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}
