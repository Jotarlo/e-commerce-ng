import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/general-data';
import { UserCredentialsModel } from 'src/app/models/user-credencials.model';
import { MD5 } from 'crypto-js';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.email, Validators.minLength(GeneralData.EMAIL_MIN_LENGHT)]],
      password: ["", [Validators.required, Validators.minLength(GeneralData.PASSWORD_MIN_LENGHT)]]
    });
  }

  Login() {
    if (this.form.invalid) {
      OpenGeneralMessageModal(GeneralData.INVALID_FORM_MESSAGE)
    } else {
      OpenGeneralMessageModal(GeneralData.VALID_FORM_MESSAGE)
      let modelo = new UserCredentialsModel();
      modelo.username = this.GetForm.username.value;
      modelo.password = MD5(this.GetForm.password.value).toString();
    }
  }

  get GetForm() {
    return this.form.controls;
  }

}
