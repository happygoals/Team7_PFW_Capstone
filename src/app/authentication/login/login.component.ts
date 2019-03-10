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
}
