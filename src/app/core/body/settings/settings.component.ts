import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../../../authentication/auth.service";
import { UserService } from "../../../services/user.service"

@Component({
  selector: 'app-core-body-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit{

  email : string

  ngOnInit(){
    if(this.authService.getIsAuth() == false){
      this.router.navigateByUrl('/login')
    }

    this.email = this.getEmail();
  }
  /* password validation */
  passMatch() {
    const name1 = ((document.getElementById('name1Input') as HTMLInputElement).value);
    const name2 = ((document.getElementById('name2Input') as HTMLInputElement).value);
    const pass = ((document.getElementById('password') as HTMLInputElement).value);
    const confirmpass = ((document.getElementById('confirmPassword') as HTMLInputElement).value);
    const saveButton = document.getElementById('saveButton') as HTMLButtonElement;
    if (pass !== confirmpass || (pass === '' && confirmpass === '') ) {
      if(pass === '' && confirmpass === ''){
        return false;
      }
      return true;
    }
    return false;
  }

  disabledButton(){
      const name1 = ((document.getElementById('name1Input') as HTMLInputElement).value);
      const name2 = ((document.getElementById('name2Input') as HTMLInputElement).value);
      const pass = ((document.getElementById('password') as HTMLInputElement).value);
      const confirmpass = ((document.getElementById('confirmPassword') as HTMLInputElement).value);
      const saveButton = document.getElementById('saveButton') as HTMLButtonElement;
      if (pass !== confirmpass || (pass === '' && confirmpass === '' || !name1 || !name2) ) {
        saveButton.disabled = true;
      }
      else{
        saveButton.disabled = false;
      }
  }

  onSubmit() {
    console.log(this.form);
  }

  form: FormGroup;
  constructor(fb: FormBuilder, private router: Router, private authService: AuthService, private userService: UserService)
  {
    this.form = fb.group({
    // Define your control in you form
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
    }, {

    })
  }

  firstnameFormControl = new FormControl('', [
    Validators.required,
  ]);

  lastnameFormControl = new FormControl('', [
    Validators.required,
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

    var email = this.userService.getValue()

    var settingsName1 = (<HTMLInputElement>document.getElementById("name1Input")).value; // First name
    var settingsName2 = (<HTMLInputElement>document.getElementById("name2Input")).value; // Last name
    var settingPW = (<HTMLInputElement>document.getElementById("password")).value; // new password
    var settingCPW = (<HTMLInputElement>document.getElementById("confirmPassword")).value; // confirm new password
    var string =  "First Name:" + settingsName1 +"/ Last Name:" + settingsName2 + "/ Password:"+ settingPW + "/ ConfirmPassword:" + settingCPW // all values pluged in a string

    this.update(email, settingsName1, settingsName2, settingPW)
  }

  update(email, firstname, lastname, password){
    this.authService.update(email, firstname, lastname, password);
  }

  getEmail(){
    return this.userService.getValue()
  }
}
