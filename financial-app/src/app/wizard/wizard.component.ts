import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Autounsubscribe } from '@app/wizard/classes/autounsubscribe';

import { Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { ConfigService } from './services/config.service';
import * as WizardActions from './store/wizard.actions';
import * as fromWizard from './store/wizard.reducer';
import * as fromWizardSelectors from './store/wizard.selectors';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
})
export class WizardComponent
  extends Autounsubscribe
  implements OnInit, OnDestroy {
  config: any;
  routeName!: string;
  constructor(
    public store: Store<fromWizard.State>,
    private router: Router,
    private configSrv: ConfigService
  ) {
    super();
    this.routeName = router.url.replace('/', '');
    this.store.dispatch(WizardActions.getConfig());
    this.configSrv.updateConfigNameSubject(this.routeName);
  }
  id$: Observable<string | null> = this.configSrv.getId$;

  ngOnInit(): void {
    this.store
      .select(fromWizardSelectors.componentState, { config: this.routeName })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: any) => {
        this.config = data.wizard[this.routeName];
        console.log(this.config, 'config');
      });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
