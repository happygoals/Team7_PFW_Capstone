import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-authentication-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    first: new FormControl(null, [
      Validators.required,
    ]),
    last: new FormControl(null, [
      Validators.required,
    ]),
    id: new FormControl(null, [
      Validators.required,
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    newpass: new FormControl(null, [
      Validators.required,
    ]),
    confirmpass: new FormControl(null, [
      Validators.required,
    ]),
  }, );

  constructor(
    private authService: AuthService, private router: Router, private userService: UserService
  ) {}

  registered() {
    if(!this.passMatch()){
      document.getElementById('registered').style.display = 'block';
      document.getElementById('submissionButtons').style.display = 'none';
      document.getElementById('registerInput').style.display = 'none';
    }

    var firstname = (<HTMLInputElement>document.getElementById("first")).value; // First name
    var lastname = (<HTMLInputElement>document.getElementById("last")).value; // Last name
    var id = (<HTMLInputElement>document.getElementById("id")).value; // id
    var password = (<HTMLInputElement>document.getElementById("pass")).value; // new password
    var email = (<HTMLInputElement>document.getElementById("email")).value; // email

    this.register(firstname, lastname, email, password, id)
  }

  passMatch() {
    const pass = ((document.getElementById('pass') as HTMLInputElement).value);
    const confirmpass = ((document.getElementById('confirmpass') as HTMLInputElement).value);
    const registerButton = document.getElementById('register') as HTMLButtonElement;
    if (pass !== confirmpass || (pass === '' && confirmpass === '')) {
      registerButton.disabled = true;
      if(pass === '' && confirmpass === ''){
        return false;
      }
      return true;
    }
    registerButton.disabled = false;
    return false;
  }

  register(firstname, lastname, email, password, employeeID){

    this.authService.createUser(firstname, lastname, email, password, employeeID)

  }
}
