import { Component} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


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

/* Save email address and password when the user types those on login input box */
  saveValue(){
    var loginemail = (<HTMLInputElement>document.getElementById("emailInput")).value;
    var loginpw = (<HTMLInputElement>document.getElementById("passwordInput")).value;
    alert(loginemail + loginpw); /* just for alert, anyone can remove it after testing */
  }

}
