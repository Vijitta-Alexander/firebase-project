import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseServiceService } from './service/firebase-service.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC0wpB2ID_m-4y4PQ7CfPeUQs9SPxakqjs",
      authDomain: "fir-1-ad61c.firebaseapp.com",
      projectId: "fir-1-ad61c",
      storageBucket: "fir-1-ad61c.appspot.com",
      messagingSenderId: "329033034431",
      appId: "1:329033034431:web:98c7d4a8c663cfc162f40a"
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FirebaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
