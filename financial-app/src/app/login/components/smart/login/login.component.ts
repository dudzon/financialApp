import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ControlName } from '@app/login/models/control-name';
import { Autounsubscribe } from '@app/shared/classes/autounsubscribe';
import { InputType } from '@app/shared/models/input-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends Autounsubscribe implements OnInit {
  loginForm!: FormGroup;
  public loginButtonText = 'Login';
  public LoginInputType = InputType;
  public ControlName = ControlName;

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  submitForm(): void {
    console.log(this.loginForm, 'loginForm');
  }
}
