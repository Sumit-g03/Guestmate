import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Users } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post('http://localhost:5000/api/auth/login', data);
  }
  signUp(data: Users): Observable<Users> {
    return this.http.post<any>('http://localhost:5000/api/auth/signup',data);
  }

  logout(data:any):Observable<any>{
    return this.http.get('http://localhost:5000/api/auth/logout')
  }
    

}
