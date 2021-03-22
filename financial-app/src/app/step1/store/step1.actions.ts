import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Step1State } from '../models/step1State';

export const updateStore = createAction(
  '[Step1 Component] Update Store',
  props<{ payload: Step1State }>()
);

export const dataSent = createAction('[Step1 Component] Send data to backend');

export const error = createAction(
  '[Step1 Component] Backend error',
  props<{ payload: { error: HttpErrorResponse } }>()
);
