import { Component, EventEmitter, Output } from '@angular/core';
import { FirebaseServiceService } from '../service/firebase-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Output() isLogout=new EventEmitter<void>()
  constructor(public firebaseService:FirebaseServiceService){}

  logout(){
    this.firebaseService.logout();
    this.isLogout.emit();
  }
}
