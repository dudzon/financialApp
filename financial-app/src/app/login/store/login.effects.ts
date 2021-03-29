import { Injectable } from '@angular/core';

import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of, timer } from 'rxjs';
import { switchMap, map, catchError, tap, delay } from 'rxjs/operators';

import * as LoginActions from './login.actions';
import { HttpService } from '@app/services/http.service';
import { SnackbarService } from '@app/services/snackbar.service';
import { Routes } from '@app/shared/models/routes';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class LoginEffects {
  postLoginData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.updateStore),
      switchMap((action) => {
        return this.http.postLoginData(action.payload).pipe(
          tap(() => this.snackbar.success('Login is successful')),
          delay(3000),
          map(() => {
            this.router.navigate([Routes.calc]);
            return LoginActions.authenticate();
          }),
          catchError((error: HttpErrorResponse) => {
            this.snackbar.error(error.error.message);
            return of(
              LoginActions.error({ payload: { error: error.error.message } })
            );
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpService,
    private snackbar: SnackbarService,
    private router: Router
  ) {}
}
