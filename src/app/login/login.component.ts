import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
// import {AuthService} from '../authstatus.service'
import { Users } from '../users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private signupService: LoginService,
    private router: Router,
    private cookie: CookieService,
    // private authService:AuthService
  ) {}

  loginForm = new FormGroup({
    email: new FormControl(' ', [Validators.required, Validators.email]),

    password: new FormControl('', [Validators.required]),
  });

  loginUser() {
    console.log(this.loginForm.value);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(data: any) {
    this.signupService.login(data).subscribe((data) => {
      if (data) {
        this.cookie.set('user',JSON.stringify(data))
        const dat = data as Users //typecasting that string data into user interface
        // this.cookie.set('jwt',dat.token);
        this.router.navigate(['/']);
        // this.authService.isAuthenticated=true
      }
    });
    console.log(data);
  }
}
