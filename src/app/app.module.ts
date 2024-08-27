import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FootorComponent } from './footor/footor.component';
import { IvyCarouselModule } from 'angular-responsive-carousel-ng16';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GuestListComponent } from './guest-list/guest-list.component';
import { NewGuestComponent } from './new-guest/new-guest.component';
import { UpdateGuestComponent } from './update-guest/update-guest.component';
import {HttpClientModule} from '@angular/common/http'
// import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ContactusComponent,
    AboutusComponent,
    FootorComponent,
    LoginComponent,
    SignupComponent,
    GuestListComponent,
    NewGuestComponent,
    UpdateGuestComponent,

    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    // CookieService
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
