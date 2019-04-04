import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  url = 'http://localhost:3000';

  login(Email, Password) {
    return this.http.post(`${this.url}/auth/` + Email + `/` + Password, null);
  }
}
