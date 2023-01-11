import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import LoginDetails from 'src/app/meta-data/interfaces/UserDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private http: HttpClient) { }

  login(payload: LoginDetails): Observable<any> {
    return this.http.post('http://localhost:3000/login', payload);
  }

  getSessionToken(payload: any) {
    return this.http.post('http://localhost:3000/login', payload);
  }
}
