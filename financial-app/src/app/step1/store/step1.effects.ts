import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as Step1Actions from './step1.actions';
import { HttpService } from '@app/services/http.service';

@Injectable()
export class Step1Effects {
  postStep1Data$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Step1Actions.updateStore),
      switchMap((action) => {
        return this.http.postStep1Data(action.payload).pipe(
          map(() => Step1Actions.dataSent()),
          catchError((error) => {
            console.log(error, 'error');
            return of(Step1Actions.error(error));
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpService) {}
}
