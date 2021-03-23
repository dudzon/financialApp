import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Step2State } from '../models/step2State';

export const updateStore = createAction(
  '[Step2 Component] Update Store',
  props<{ payload: Step2State }>()
);

export const dataSent = createAction('[Step2 Component] Send data to backend');

export const error = createAction(
  '[Step2 Component] Backend error',
  props<{ payload: { error: HttpErrorResponse } }>()
);
