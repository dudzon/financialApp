import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as WizardActions from './store/wizard.actions';
import * as fromWizard from './store/wizard.reducer';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
})
export class WizardComponent implements OnInit {
  constructor(private store: Store<fromWizard.State>) {}

  ngOnInit(): void {
    this.store.dispatch(WizardActions.getConfig());

    console.log(this.store);
  }
}
