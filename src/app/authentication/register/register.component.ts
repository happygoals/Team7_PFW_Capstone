import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: "app-authentication-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {

  registerForm = new FormGroup({
    first: new FormControl('', [
      Validators.required,
    ]),
    last: new FormControl('', [
      Validators.required,
    ]),
    id: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    newpass: new FormControl('', [
      Validators.required,
    ]),
    confirmpass: new FormControl('', [
      Validators.required,
    ])
  });

  registered() {
    document.getElementById("registered").style.display = "block";
    document.getElementById("submissionButtons").style.display = "none";
    document.getElementById("registerInput").style.display = "none";
  }
}
