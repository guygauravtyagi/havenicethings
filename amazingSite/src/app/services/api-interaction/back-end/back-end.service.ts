import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as DataModel from 'src/app/meta-data/interfaces/UserDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private http: HttpClient) { }

  login(payload: DataModel.LoginDetails): Observable<any> {
    return this.http.post('http://localhost:3000/login', payload);
  }

  signUp(payload: DataModel.SignUpDetails) {
    return this.http.post('http://localhost:3000/signUp', payload);
  }

  getSessionToken(payload: any) {
    return this.http.post('http://localhost:3000/login', payload);
  }
}
