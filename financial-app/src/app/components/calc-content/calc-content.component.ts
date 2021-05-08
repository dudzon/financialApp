import { Component } from '@angular/core';
import * as fromWizardSelectors from '@app/wizard/store/wizard.selectors';
import * as fromWizard from '@app/wizard/store/wizard.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calc-content',
  templateUrl: './calc-content.component.html',
  styleUrls: ['./calc-content.component.css'],
})
export class CalcContentComponent {
  public minRate$: Observable<number> = this.store.select(
    fromWizardSelectors.selectMinRate
  ) as Observable<number>;

  public maxRate$: Observable<number> = this.store.select(
    fromWizardSelectors.selectMaxRate
  ) as Observable<number>;

  constructor(private store: Store<fromWizard.State>) {}
}
