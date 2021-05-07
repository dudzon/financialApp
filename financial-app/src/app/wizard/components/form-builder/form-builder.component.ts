import { Component, Input, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Autounsubscribe } from '@app/wizard/classes/autounsubscribe';
import { ConfigService } from '@app/wizard/services/config.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromWizard from '../../store/wizard.reducer';
import * as WizardActions from '../../store/wizard.actions';
import * as fromWizardSelectors from '../../store/wizard.selectors';
import { Step1Payload } from '@app/wizard/models/step1Payload';
import { Step2Payload } from '@app/wizard/models/step2Payload';
import { Step3Payload } from '@app/wizard/models/step3Payload';
import { Step4Payload } from '@app/wizard/models/step4Payload';
import { Routes } from '@app/wizard/models/routes';
import { Router } from '@angular/router';
import { CalcPayload } from '@app/wizard/models/calcPayload';
import { LoginPayload } from '@app/wizard/models/loginPayload';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent
  extends Autounsubscribe
  implements OnInit, OnChanges, OnDestroy {
  @Input() template: any;
  @Input() id!: string | null;
  form!: FormGroup;
  route!: string | null;
  constructor(
    private configSrv: ConfigService,
    private store: Store<fromWizard.State>,
    private router: Router
  ) {
    super();
    this.configSrv.getId$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((route: string | null) => (this.route = route));
  }

  ngOnChanges(): void {
    this.form = new FormGroup({});
    this.getControls();
  }

  ngOnInit(): void {
    console.log(this.store, 'store - form-builder, onInit');
  }

  submitForm(): void {
    this.getPayload(this.route as string);
    this.goToNextRoute(this.route as string);
    console.log(this.store, 'store');
  }

  getControls(): void {
    const filtered = this.filterButtons();
    if (filtered) {
      filtered.forEach((item: any) =>
        this.form.addControl(
          item.field,
          new FormControl('', { updateOn: 'submit' })
        )
      );
    }
  }

  filterButtons(): any {
    if (this.template) {
      const filtered = this.template.filter(
        (item: any) => item.type !== 'button'
      );
      return filtered;
    }
  }

  getFormClass(route: string | null): string {
    switch (route) {
      case 'login':
        return 'form';
      case 'calc':
        return 'calcForm';
      default:
        return 'form';
    }
  }

  getPayload(route: string): void {
    switch (route) {
      case Routes.login:
        this.store.dispatch(
          WizardActions.updateLogin({
            payload: this.form.value as LoginPayload,
          })
        );
        break;
      case Routes.calc:
        this.store.dispatch(
          WizardActions.updateCalc({
            payload: this.form.value as CalcPayload,
          })
        );
        break;
      case Routes.step1:
        this.store.dispatch(
          WizardActions.updateState1({
            payload: this.form.value as Step1Payload,
          })
        );
        break;
      case Routes.step2:
        this.store.dispatch(
          WizardActions.updateState2({
            payload: this.form.value as Step2Payload,
          })
        );
        break;
      case Routes.step3:
        this.store.dispatch(
          WizardActions.updateState3({
            payload: this.form.value as Step3Payload,
          })
        );
        break;
      case Routes.step4:
        this.store.dispatch(
          WizardActions.updateState4({
            payload: this.form.value as Step4Payload,
          })
        );
        break;
      default:
        throw new Error('Action not found');
    }
  }

  goToNextRoute(route: string): void {
    switch (route) {
      case Routes.login:
        this.router.navigate([Routes.calc]);
        break;
      case Routes.calc:
        this.router.navigate([Routes.step1]);
        break;
      case Routes.step1:
        this.router.navigate([Routes.step2]);
        break;
      case Routes.step2:
        this.router.navigate([Routes.step3]);
        break;
      case Routes.step3:
        this.router.navigate([Routes.step4]);
        break;
    }
  }

  // showCustomTemplatePart(): string {
  //   return ` <div class="row">
  //                   <div class="col s2 push-s1">
  //                       <span class="texts__main">Monthly rate</span>
  //                   </div>
  //                   <div class="col s8 push-s1">
  //                       <p>
  //                           <!-- from <span>{{minRate$ | async}}</span><span>EUR</span> to
  //                           <span>{{maxRate$ | async}}</span><span>EUR</span> -->
  //                       </p>
  //                   </div>
  //               </div>
  //               <div class="row">
  //                   <div class="col s2 push-s1">
  //                       <span>Nominal interest</span>
  //                   </div>
  //                   <div class="col s8 push-s1">
  //                       <p>
  //                           from <span>5.67%</span> to <span>9.8%</span>
  //                       </p>
  //                   </div>
  //               </div>
  //         `;
  // }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
