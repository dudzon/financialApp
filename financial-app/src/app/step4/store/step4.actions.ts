import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Step4State } from '../models/step4State';

export const updateStore = createAction(
  '[Step4 Component] Update Store',
  props<{ payload: Step4State }>()
);

export const dataSent = createAction('[Step4 Component] Send data to backend');

export const error = createAction(
  '[Step4 Component] Backend error',
  props<{ payload: { error: HttpErrorResponse } }>()
);
