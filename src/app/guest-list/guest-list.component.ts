import { Component } from '@angular/core';
import { GuestService } from '../guest.service';
import { Guest, GuestBackend } from '../guest';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Users } from '../users';
// import { AuthService } from '../authstatus.service';
@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css'],
})
export class GuestListComponent {
  guests: Guest[];
  id;
  constructor(
    private guestService: GuestService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit() {
    const cookieValue = this.cookieService.get('user');
    const val = JSON.parse(cookieValue) as Users;
    this.id = val.data.user._id;
    this.guestService.getGuest(this.id).subscribe((response) => {
      if(response){
      this.guests = response.data.guests.map((data: any) => ({
        Sno: data.Sno || 0, // Use 0 as default value if Sno is missing
        name: data.name || '',
        email: data.email || '',
        address: data.address || '',
        phone: data.phone || 0,
        _id: data._id || '',
      }));
    }});
  }

  onUpdate(id: any) {
    this.router.navigate([`update`, id]);
  }

  onDelete(guestId: string) {
    this.guestService.deleteGuest(this.id, guestId).subscribe((data) => {
      if (data) {
        this.guestService.getGuest(this.id).subscribe((response) => {
          this.guests = response.data.guests.map((data: any) => ({
            Sno: data.Sno || 0, 
            name: data.name || '',
            email: data.email || '',
            address: data.address || '',
            phone: data.phone || 0,
            _id: data._id || '',
          }));
        });
      }
    });
  }
}
