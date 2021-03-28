import { Step1State } from '@app/step1/models/step1State';
import { createReducer, Action, on } from '@ngrx/store';

import { LoginState } from '../models/loginState';
import * as LoginActions from './login.actions';

const initialState: LoginState = {
  username: '',
  password: '',
  isAuthenticated: false,
};

const IS_AUTHENTICATED = 'is_authenticated';

const loginReducer = createReducer(
  initialState,
  on(LoginActions.updateStore, (state, action) => ({
    ...state,
    username: action.payload.username,
    password: action.payload.password,
    isAuthenticated: action.payload.isAuthenticated,
  })),
  on(LoginActions.authenticate, (state) => {
    if (!localStorage.getItem(IS_AUTHENTICATED)) {
      localStorage.setItem(IS_AUTHENTICATED, 'true');
    }

    return {
      ...state,
      isAuthenticated: true,
    };
  }),
  on(LoginActions.isUserAuthenticated, (state) => {
    const isAuthenticated = true;
    return {
      ...state,
      isAuthenticated,
    };
  }),
  on(LoginActions.error, (state, action) => {
    return { ...state };
  })
);

// tslint:disable-next-line:typedef
export function reducer(state: LoginState | undefined, action: Action) {
  return loginReducer(state, action);
}
