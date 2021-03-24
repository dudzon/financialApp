import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { CalcState } from '../models/calcState';

export const updateStore = createAction(
  '[Calc Component] UpdateStore',
  props<{ payload: CalcState }>()
);

export const calculateRate = createAction(
  '[Calc Component] Calculate Rate',
  props<{ payload: CalcState }>()
);

export const dataSent = createAction('[Calc Component] Send data to backend');

export const error = createAction(
  '[Calc Component] Backend error',
  props<{ payload: { error: HttpErrorResponse } }>()
);
