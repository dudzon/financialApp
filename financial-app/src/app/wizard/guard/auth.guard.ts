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

import { SnackbarService } from '@app/wizard/services/snackbar.service';
import * as WizardActions from '@app/wizard/store/wizard.actions';
import * as fromWizard from '@app/wizard/store/wizard.reducer';

import { Routes } from '../models/routes';

const IS_AUTHENTICATED = 'is_authenticated';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<fromWizard.State>,
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
      this.store.dispatch(WizardActions.getConfig());
      // this.store.dispatch(WizardActions.isUserAuthenticated());
      // this.router.navigate([Routes.step1]);
      // this.router.navigate(['']);
      // this.store.dispatch(WizardActions.isUserAuthenticated());

      // setTimeout(() => {
      //   // this.store.dispatch(WizardActions.getConfig());
      // }, 3000);

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
