import { Component } from '@angular/core';
import { Guest } from '../guest';
import { FormGroup } from '@angular/forms';
import { GuestService } from '../guest.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Users } from '../users';

@Component({
  selector: 'app-new-guest',
  templateUrl: './new-guest.component.html',
  styleUrls: ['./new-guest.component.css'],
  exportAs: 'guestForm',
})
export class NewGuestComponent {
  guestForm: FormGroup;

  constructor(
    private guestService: GuestService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  onAdd(guest: Guest) {
    const cookieValue = this.cookieService.get('user');
    const val = JSON.parse(cookieValue) as Users;
    const id = val.data.user._id;
    console.log(id)
   
    this.guestService.postGuest(guest, id).subscribe((result) => {
      if (result) {
        console.log(result)
        this.router.navigate(['/guest-list']);
      }
    });
  }
}
