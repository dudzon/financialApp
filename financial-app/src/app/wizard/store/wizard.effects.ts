import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { createEffect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError, tap, delay } from 'rxjs/operators';
import * as WizardActions from './wizard.actions';
import { ConfigService } from '../services/config.service';
import { of } from 'rxjs';

@Injectable()
export class WizardEffects {
  getConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WizardActions.getConfig),
      //   tap((action) => console.log(action, 'action')),
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

  constructor(private actions$: Actions, private configSrv: ConfigService) {}
}
