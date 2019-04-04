import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PasswordValidation } from '../../../passwordvalidation'

@Component({
  selector: 'app-core-body-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent {

  onSubmit() {
    console.log(this.form);
  }

  form: FormGroup;
  constructor(fb: FormBuilder)
  {
    this.form = fb.group({
    // define your control in you form
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    })
  }


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  pwconfirmFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    
  ]);

  hide = true;

}
