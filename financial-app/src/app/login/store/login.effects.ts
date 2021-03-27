import { Injectable } from '@angular/core';

import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as LoginActions from './login.actions';
import { HttpService } from '@app/services/http.service';

@Injectable()
export class LoginEffects {
  postLoginData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.updateStore),
      switchMap((action) => {
        return this.http.postLoginData(action.payload).pipe(
          map(() => LoginActions.authenticate()),
          catchError((error) => {
            console.log(error, 'error');
            return of(LoginActions.error(error));
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpService) {}
}
