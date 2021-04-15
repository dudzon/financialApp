import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { createEffect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError, tap, delay } from 'rxjs/operators';
import * as WizardActions from './wizard.actions';
import { ConfigService } from '../services/config.service';
import { of } from 'rxjs';
import { configLoaded } from './wizard.actions';

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
            // debugger;
            // configLoaded({ payload: { config: data } });
            return data;
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
