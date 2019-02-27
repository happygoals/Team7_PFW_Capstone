import { Component} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-authentication-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})

export class ForgotpassComponent {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

}
