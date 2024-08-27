import { Component } from '@angular/core';
import { Guest } from '../guest';
import { GuestService } from '../guest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Users } from '../users';
// import { AuthService } from '../authstatus.service';
@Component({
  selector: 'app-update-guest',
  templateUrl: './update-guest.component.html',
  styleUrls: ['./update-guest.component.css'],
})
export class UpdateGuestComponent {
  guest: Guest; // Change from Guest[] to Guest
  id: string;

  constructor(
    private guestService: GuestService,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService // private authService: AuthService
  ) {}

  ngOnInit() {
    const cookieValue = this.cookieService.get('user');
    const val = JSON.parse(cookieValue) as Users;
    this.id = val.data.user._id;
    const Sno = this.route.snapshot.params['id'];
    console.log(this.guestService.getBySno(this.id, Sno));
    this.guest = this.guestService.getBySno(this.id, Sno);
  }

  onUpdate(guest: Guest) {
    // console.log('THIS IS THE GUEST' + this.guest);
    this.guestService
      .updateGuest(guest, this.id, this.route.snapshot.params['id'])
      .subscribe((data) => {
        console.log(data);
      });
    this.router.navigate(['/guest-list']);
  }
}
