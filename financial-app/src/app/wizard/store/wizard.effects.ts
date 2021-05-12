import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { createEffect, ofType, Actions } from '@ngrx/effects';
import {
  switchMap,
  map,
  catchError,
  withLatestFrom,
  tap,
  delay,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as WizardActions from './wizard.actions';
import { ConfigService } from '../services/config.service';

import * as fromWizard from './wizard.reducer';
import { SnackbarService } from '../services/snackbar.service';
import { HttpService } from '../services/http.service';
import { Routes } from '../models/routes';
import { Router } from '@angular/router';

@Injectable()
export class WizardEffects {
  getConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WizardActions.getConfig),
      switchMap(() => {
        return this.configSrv.getConfig().pipe(
          map((data) => {
            console.log(data, 'data');
            return WizardActions.configLoaded({ payload: { config: data } });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(WizardActions.error(error.error.message));
          })
        );
      })
    )
  );

  postLoginData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WizardActions.updateLogin),
      switchMap((action) => {
        return this.http.postLoginData(action.payload).pipe(
          tap(() => this.snackbar.success('Login is successful')),
          delay(3000),
          map(() => {
            this.router.navigate([Routes.calc]);
            return WizardActions.authenticate();
          }),
          catchError((error: HttpErrorResponse) => {
            this.snackbar.error(error.error.message);
            return of(
              WizardActions.error({ payload: { error: error.error.message } })
            );
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private configSrv: ConfigService,
    private store: Store<fromWizard.State>,
    private http: HttpService,
    private snackbar: SnackbarService,
    private router: Router
  ) {}
}
