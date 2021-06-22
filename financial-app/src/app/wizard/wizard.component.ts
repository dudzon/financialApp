import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Autounsubscribe } from '@app/wizard/classes/autounsubscribe';

import { Store } from '@ngrx/store';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { from, Observable } from 'rxjs';
import { filter, take, takeUntil, tap } from 'rxjs/operators';
import { Routes } from './models/routes';
import { ConfigService } from './services/config.service';
import * as WizardActions from './store/wizard.actions';
import * as fromWizard from './store/wizard.reducer';
import * as fromWizardSelectors from './store/wizard.selectors';

const IS_AUTHENTICATED = 'is_authenticated';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
})
export class WizardComponent
  extends Autounsubscribe
  implements OnInit, OnDestroy
{
  config: any;
  routeName!: string;
  private IS_AUTHENTICATED = 'is_authenticated';
  constructor(
    public store: Store<fromWizard.State>,
    private router: Router,
    private configSrv: ConfigService,
    private socialAuthSrv: SocialAuthService
  ) {
    super();
    this.routeName = router.url.replace('/', '');
    this.socialAuthSrv.authState
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user) => {
        this.user = user;
        console.log(this.user, 'user');
      });
    if (this.routeName === Routes.login && !this.user) {
      this.store.dispatch(WizardActions.getConfig());
    }

    this.configSrv.updateConfigNameSubject(this.routeName);
  }
  id$: Observable<string | null> = this.configSrv.getId$;
  user!: SocialUser;

  ngOnInit(): void {
    this.store
      .select(fromWizardSelectors.componentState, { config: this.routeName })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: any) => {
        this.config = data.wizard[this.routeName];
      });
  }

  isProgressVisible(): boolean {
    if (this.routeName !== Routes.login && this.routeName !== Routes.calc) {
      return true;
    }
    return false;
  }

  getProgressValue(route: string): string {
    switch (route) {
      case Routes.step1:
        return '0%';
      case Routes.step2:
        return '20%';
      case Routes.step3:
        return '60%';
      case Routes.step4:
        return '80%';
      default:
        return '0%';
    }
  }

  isUserAuthenticated(): void {
    if (localStorage.getItem(this.IS_AUTHENTICATED)) {
      this.router.navigate([Routes.calc]);
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
