import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as Step4Actions from './step4.actions';
import { HttpService } from '@app/services/http.service';

import { of } from 'rxjs';

@Injectable()
export class Step1Effects {
  postStep4Data$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Step4Actions.updateStore),
      switchMap((action) => {
        return this.http.postStep4Data(action.payload).pipe(
          map(() => Step4Actions.dataSent()),
          catchError((error) => {
            console.log(error, 'error');
            return of(Step4Actions.error(error));
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpService) {}
}
