import { Component} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-authentication-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loading = false;
  submitted = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  hide = true;

  constructor(
    private authService: AuthService, private router: Router, private userService: UserService
  ) {}

/* Save email address and password when the user types those on login input box */
  saveValue(){
    var loginemail = (<HTMLInputElement>document.getElementById("emailInput")).value;
    var loginpw = (<HTMLInputElement>document.getElementById("passwordInput")).value;

    this.userService.setValue(loginemail);
    this.login(loginemail, loginpw);
  }

  login(email, password) {
    this.authService.login(email, password);
  }

}
