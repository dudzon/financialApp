import { Action } from "../../../store/model";

export const LOGIN = "[Login] Login";
export const AUTH = "[Login] Auth";

export class LoginSuccess implements Action {
  readonly type = LOGIN;

  constructor(
    public payload: { user: string; password: string; isAuthenticated: boolean }
  ) {}
}

export class Auth implements Action {
  readonly type = AUTH;
  constructor(public payload: { isAuthenticated: boolean }) {}
}

export type LoginActions = LoginSuccess | Auth;
