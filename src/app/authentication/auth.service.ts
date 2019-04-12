import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthData } from "./auth-data.model";
const LOGIN_URL = 'http://localhost:3000/user';

@Injectable()
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}
  url = 'http://localhost:3000/auth';

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  
  createUser(firstname: string, lastname: string, email: string, password: string, employeeID: string) {
    const authData: AuthData = { Firstname: firstname, Lastname: lastname, Email: email, Password: password, EmployeeID: employeeID };
    this.http.post(`${this.url}/register`, authData)
    .subscribe(
      response =>{
        this.router.navigate(["/login"]);
        return true
      },
      error => {
        this.router.navigate(["/register"])
        this.authStatusListener.next(false);
      }
    )
  }

  update(email: string, firstname: string, lastname: string, password: string) {
    const authData: AuthData = { Email: email, Firstname: firstname, Lastname: lastname, Password: password };
    let eAlert = "Incorrect credentials"
    this.http.post(`${this.url}/update`, authData)
    .subscribe(
      response =>{
        this.router.navigate(["/population"]);
        return true
      },
      error => {
        this.router.navigate(["/population"])
        this.authStatusListener.next(false);
      }
    )

  }

  login(email: string, password: string) {
    let eAlert = "Incorrect credentials"
    let count = 0
    const authData: AuthData = { Email: email, Password: password };
    console.log("second")
    this.http.post(`${this.url}/login`, authData)
    .subscribe(
      response =>{
        this.router.navigate(["/population"]);
        this.isAuthenticated = true
        return true
      },
      error => {
        this.router.navigate(["/login"])
        console.log("broke")
        this.authStatusListener.next(false);
      }
    )
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    //this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    // this.userId = null;
    // clearTimeout(this.tokenTimer);
    // this.clearAuthData();
    this.router.navigate(["/login"]);
  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userId", userId);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId
    };
  }


  // login(Email, Password) {
  //   return this.http.post(`${this.url}/auth/` + Email + `/` + Password, null);
  // }
}
