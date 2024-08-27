import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Users } from '../users';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
// import { AuthService } from '../authstatus.service';
@Component({
  selector: 'app-header',
  // template:
  //   '<button *ngIf="authService.isAuthenticated">Authenticated Button</button> <button *ngIf="!authService.isAuthenticated">Guest Button</button>',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  token: string;
  id: string;

  constructor(
    private cookieService: CookieService,
    private loginService: LoginService,
    private router: Router
  ) {}
  ngOnInit() {
    const cookieValue = this.cookieService.get('user');
    const val = JSON.parse(cookieValue) as Users;
    this.token = val.token;
    this.id = val.data.user._id;
  }
  onRefresh(){
    window.location.reload();
  }

  onLogout() {
    this.loginService.logout(this.id).subscribe((data) => {
      if (data) {
        console.log('User Logged out');
        this.cookieService.delete('user');
        window.location.reload();
      }
    });
  }
}