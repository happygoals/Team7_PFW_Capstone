import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material';

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

  registered() {
    if(!this.passMatch()){
      document.getElementById('registered').style.display = 'block';
      document.getElementById('submissionButtons').style.display = 'none';
      document.getElementById('registerInput').style.display = 'none';
    }
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

}
