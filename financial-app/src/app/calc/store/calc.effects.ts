import { Injectable } from '@angular/core';

import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as CalcActions from './calc.actions';
import { HttpService } from '@app/services/http.service';

@Injectable()
export class CalcEffects {
  postStep1Data$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CalcActions.updateStore),
      switchMap((action) => {
        return this.http.postCalcData(action.payload).pipe(
          map(() => CalcActions.dataSent()),
          catchError((error) => {
            console.log(error, 'error');
            return of(CalcActions.error(error));
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpService) {}
}
