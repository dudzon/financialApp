import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ControlName } from '@app/login/models/control-name';
import { Autounsubscribe } from '@app/shared/classes/autounsubscribe';
import { ButtonColors } from '@app/shared/models/button-color';
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
  public successBtnColor: ButtonColors = ButtonColors.primary;

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      [ControlName.username]: [''],
      [ControlName.password]: [''],
    });
  }

  submitForm(): void {
    console.log(this.loginForm, 'loginForm');
  }
}
