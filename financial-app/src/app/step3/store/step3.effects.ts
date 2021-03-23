import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as Step3Actions from './step3.actions';
import { HttpService } from '@app/services/http.service';

import { of } from 'rxjs';

@Injectable()
export class Step1Effects {
  postStep3Data$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Step3Actions.updateStore),
      switchMap((action) => {
        return this.http.postStep3Data(action.payload).pipe(
          map(() => Step3Actions.dataSent()),
          catchError((error) => {
            console.log(error, 'error');
            return of(Step3Actions.error(error));
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpService) {}
}
