import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FootorComponent } from './footor/footor.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewGuestComponent } from './new-guest/new-guest.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { UpdateGuestComponent } from './update-guest/update-guest.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'footor',component:FootorComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'new-guest',component:NewGuestComponent},
  {path:'guest-list',component:GuestListComponent},
  {path:'update/:id',component:UpdateGuestComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
