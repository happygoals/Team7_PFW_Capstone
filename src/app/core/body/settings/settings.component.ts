import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
     
    })
  }


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8), // password should be more than 8 letters
  ]);

  pwconfirmFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8), // password should be more than 8 letters
  ]);

  hide = true;


  /* Save first name, last name, password, and confirmPassword when the user types those info on settings' input box */
  saveValue(){
    var settingsName1 = (<HTMLInputElement>document.getElementById("name1Input")).value; // First name
    var settingsName2 = (<HTMLInputElement>document.getElementById("name2Input")).value; // Last name
    var settingPW = (<HTMLInputElement>document.getElementById("password")).value; // new password
    var settingCPW = (<HTMLInputElement>document.getElementById("confirmPassword")).value; // confirm new password
    var string =  "First Name:" + settingsName1 +"/ Last Name:" + settingsName2 + "/ Password:"+ settingPW + "/ ConfirmPassword:" + settingCPW // all values pluged in a string
    alert(string); /* just for alert, anyone can remove it after testing */
  }

}
