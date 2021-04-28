import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { createEffect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as WizardActions from './wizard.actions';
import { ConfigService } from '../services/config.service';

import * as fromWizard from './wizard.reducer';

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

  constructor(
    private actions$: Actions,
    private configSrv: ConfigService
  ) // private store: Store<fromWizard.State>
  {}
}
