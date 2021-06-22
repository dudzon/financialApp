import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';

import { SnackbarService } from '@app/wizard/services/snackbar.service';
import * as WizardActions from '@app/wizard/store/wizard.actions';
import * as fromWizard from '@app/wizard/store/wizard.reducer';
import * as fromWizardSelectors from '@app/wizard/store/wizard.selectors';

import { Routes } from '../models/routes';
import { map } from 'rxjs/operators';

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
    if (!localStorage.getItem(IS_AUTHENTICATED)) {
      this.snackbar.error(
        'You are not allowed to visit this page. Please log in'
      );
      setTimeout(() => {
        this.router.navigate([Routes.login]);
      }, 3000);

      return false;
    } else {
      // this.store.dispatch(WizardActions.getConfig());
      this.snackbar.success('You are authenticated');
      // this.store.dispatch(WizardActions.isUserAuthenticated());
      console.log(this.store, 'store from guard');
      return true;
    }
  }
}
