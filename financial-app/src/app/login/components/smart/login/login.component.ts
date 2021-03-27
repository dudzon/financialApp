import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { ControlName } from '@app/login/models/control-name';
import { LoginState } from '@app/login/models/loginState';
import { Autounsubscribe } from '@app/shared/classes/autounsubscribe';
import { ButtonColors } from '@app/shared/models/button-color';
import { InputType } from '@app/shared/models/input-type';
import { Routes } from '@app/shared/models/routes';
import * as fromApp from '@app/store/app.reducer';
import * as LoginActions from '@app/login/store/login.actions';

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {
    super();
  }

  get username(): FormControl {
    return this.loginForm.get(ControlName.username) as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get(ControlName.password) as FormControl;
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      [ControlName.username]: ['', Validators.required],
      [ControlName.password]: ['', Validators.required],
    });
  }

  submitForm(): void {
    console.log(this.loginForm, 'loginForm');
    const updatedState: LoginState = {
      username: this.username.value,
      password: this.password.value,
      isAuthenticated: false,
    };
    if (this.loginForm.valid) {
      this.store.dispatch(LoginActions.updateStore({ payload: updatedState }));
      this.router.navigate([Routes.calc]);
    }
    // this.router.navigate([Routes.calc]);
  }
}
