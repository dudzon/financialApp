import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SnackbarService } from '@app/services/snackbar.service';
import * as LoginActions from '@app/login/store/login.actions';
import * as fromApp from '@app/store/app.reducer';
import { map, take } from 'rxjs/operators';
import { Routes } from '../models/routes';

const IS_AUTHENTICATED = 'is_authenticated';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<fromApp.AppState>,
    private snackbar: SnackbarService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem(IS_AUTHENTICATED)) {
      this.store.dispatch(LoginActions.isUserAuthenticated());
      return true;
    } else {
      this.snackbar.error(
        'You are not allowed to visit this page. Please log in'
      );
      setTimeout(() => {
        this.router.navigate([Routes.login]);
      }, 3000);

      return false;
    }
  }
}
