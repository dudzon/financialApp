import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Step3State } from '../models/step3State';

export const updateStore = createAction(
  '[Step3 Component] Update Store',
  props<{ payload: Step3State }>()
);

export const dataSent = createAction('[Step3 Component] Send data to backend');

export const error = createAction(
  '[Step3 Component] Backend error',
  props<{ payload: { error: HttpErrorResponse } }>()
);
