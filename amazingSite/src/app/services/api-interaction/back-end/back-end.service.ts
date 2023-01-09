import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import LoginDetails from 'src/app/meta-data/interfaces/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private http: HttpClient) { }

  login(payload: LoginDetails) {
    this.http.post('http://localhost:3000/', payload);
  }
}
