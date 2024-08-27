import { Injectable } from '@angular/core';
import { Guest, GuestBackend } from './guest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class GuestService {
  private apiUrl = 'http://localhost:5000/api';
  constructor(private http: HttpClient) {}

  addGuest(guest: Guest) {
    // return thi
  }
  guestss: Guest[];

  postGuest(guest: Guest, id: String): Observable<any> {
    console.log(`${this.apiUrl}/users/update-guests/${id}`);
    console.log(guest);
    const val = this.http.patch(
      `${this.apiUrl}/users/update-guests/${id}`,
      guest
    );
    console.log(val);
    return val;
  }

  getGuest(id: string): Observable<GuestBackend> {
    return this.http
      .get<GuestBackend>(`${this.apiUrl}/users/guests/${id}`)
      .pipe(
        map((response: any) => {
          console.log(response);

          return response as GuestBackend;
        })
      );
  }
  getBySno(id: string, Sno: string) {
    this.getGuest(id).subscribe((response) => {
      this.guestss = response.data.guests.map((data: any) => ({
        Sno: data.Sno || 0,
        name: data.name || '',
        email: data.email || '',
        address: data.address || '',
        phone: data.phone || 0,
        _id: data._id || '',
      }));
    });

    return this.guestss.find((data) => data._id === Sno);
  }

  updateGuest(guest: Guest, id: String, guestid: String): Observable<any> {
    console.log(
      `${this.apiUrl}/users/update-guests/user/${id}/guest/${guestid}`
    );
    console.log(guest);

    return this.http.patch(
      `${this.apiUrl}/users/update-guests/user/${id}/guest/${guestid}`,
      guest
    );
  }

  deleteGuest(id: String, guestid: String): Observable<any> {
    console.log(`${this.apiUrl}/users/update-guests/user/${id}/guest/${guestid}`)
    return this.http.delete(
      `${this.apiUrl}/users/update-guests/user/${id}/guest/${guestid}`
    );
  }
}
