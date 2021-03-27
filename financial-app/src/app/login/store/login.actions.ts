import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { LoginState } from '../models/loginState';

export const updateStore = createAction(
  '[Login Component] Update Store',
  props<{ payload: LoginState }>()
);

export const authenticate = createAction('[Login Component] Authenticate User');

export const error = createAction(
  '[Step1 Component] Backend error',
  props<{ payload: { error: HttpErrorResponse } }>()
);
