import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as Step2Actions from './step2.actions';
import { HttpService } from '@app/services/http.service';

import { of } from 'rxjs';

@Injectable()
export class Step1Effects {
  postStep2Data$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Step2Actions.updateStore),
      switchMap((action) => {
        return this.http.postStep2Data(action.payload).pipe(
          map(() => Step2Actions.dataSent()),
          catchError((error) => {
            console.log(error, 'error');
            return of(Step2Actions.error(error));
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpService) {}
}
