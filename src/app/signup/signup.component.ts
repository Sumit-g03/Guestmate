import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { LoginService } from '../login.service';
import { Users } from '../users';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  empForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private signupService: LoginService,
    private router: Router,
    private cookie: CookieService
  ) // private authService:AuthService
  {}

  //using Form Builder

  ngOnInit(): void {
    this.empForm = this.builder.group({
      firstname: ['', Validators.required],

      lastname: ['', Validators.required],

      mobileno: ['', Validators.required],
      username: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.minLength(8)]],

      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit(User: Users) {
    this.signupService.signUp(User).subscribe((data) => {
      if (data) {
        this.cookie.set('user', JSON.stringify(data));
        console.log(data);
        const dat = data as Users; // typecasting the data to the users interface
        // this.cookie.set('jwt', dat.token);
        this.router.navigate(['/']);
        // this.authService.isAuthenticated=true
      }
      console.log(data);
    });
    console.log(this.empForm.value);
  }
}
