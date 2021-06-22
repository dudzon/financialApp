import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Autounsubscribe } from '@app/wizard/classes/autounsubscribe';
import { FormComponent } from '@app/wizard/models/form-component';
import { Routes } from '@app/wizard/models/routes';
import { ConfigService } from '@app/wizard/services/config.service';
import { takeUntil } from 'rxjs/operators';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import * as WizardActions from '@app/wizard/store/wizard.actions';
import * as fromWizard from '@app/wizard/store/wizard.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent
  extends Autounsubscribe
  implements OnInit, FormComponent
{
  @Input() field!: any;
  route!: string | null;
  constructor(
    private router: Router,
    private configSrv: ConfigService,
    private SocialAuthSrv: SocialAuthService,
    private store: Store<fromWizard.State>
  ) {
    super();
    this.configSrv.getId$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((route: string | null) => (this.route = route));
  }
  ngOnInit(): void {}

  onBack(event: Event): void {
    event.preventDefault();
    this.goToPreviousRoute(this.route as string);
  }

  onAction(buttonAction: string, event: Event): void {
    if (!buttonAction) {
      return;
    }

    switch (buttonAction) {
      case 'back':
        this.onBack(event);
        break;
      case 'googleLogin':
        this.loginWithGoogle();
        break;
      default:
        throw new Error('No action found for button');
    }
  }

  goToPreviousRoute(route: string): void {
    switch (route) {
      case Routes.step2:
        this.router.navigate([Routes.step1]);
        break;
      case Routes.step3:
        this.router.navigate([Routes.step2]);
        break;
      case Routes.step4:
        this.router.navigate([Routes.step3]);
        break;
    }
  }

  loginWithGoogle(): void {
    this.SocialAuthSrv.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (resolve: any) => {
        this.store.dispatch(WizardActions.authenticate());
        this.router.navigate([Routes.calc]);
      }
    );
  }
}
