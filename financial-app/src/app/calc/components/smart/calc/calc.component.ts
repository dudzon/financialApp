import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { CalcState } from '@app/calc/models/calcState';
import { ControlName } from '@app/calc/models/control-name';
import { Autounsubscribe } from '@app/shared/classes/autounsubscribe';
import { ButtonColors } from '@app/shared/models/button-color';
import { Routes } from '@app/shared/models/routes';
import * as fromApp from '@app/store/app.reducer';
import * as CalcActions from '@app/calc/store/calc.actions';
import * as fromCalc from '@app/calc/store/calc.selectors';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})
export class CalcComponent extends Autounsubscribe implements OnInit {
  calcForm!: FormGroup;
  ControlName = ControlName;
  btnText = 'Apply Your Loan';
  public successBtnColor: ButtonColors = ButtonColors.primary;
  public minRate!: number;
  public maxRate!: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {
    super();
  }

  ngOnInit(): void {
    this.calcForm = this.fb.group({
      [ControlName.creditAmount]: ['', Validators.required],
      [ControlName.duration]: ['', Validators.required],
    });
    this.calcForm.statusChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.getRates());

    this.store
      .select(fromCalc.getMinRate)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        if (value) {
          this.minRate = value;
        }
      });

    this.store
      .select(fromCalc.getMaxRate)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        if (value) {
          this.maxRate = value;
        }
      });
  }

  get creditAmount(): FormControl {
    return this.calcForm.get(ControlName.creditAmount) as FormControl;
  }

  get duration(): FormControl {
    return this.calcForm.get(ControlName.duration) as FormControl;
  }

  submitForm(): void {
    console.log(this.calcForm);

    console.log(this.store);
    const updatedState: CalcState = {
      creditAmount: +this.creditAmount.value,
      duration: +this.duration.value,
      resultMin: this.minRate,
      resultMax: this.maxRate,
    };
    if (this.calcForm.valid) {
      this.store.dispatch(CalcActions.updateStore({ payload: updatedState }));

      this.router.navigate([Routes.step1]);
    }
  }

  getRates(): void {
    if (this.calcForm.valid) {
      const calcData: Partial<CalcState> = {
        creditAmount: +this.creditAmount.value,
        duration: +this.duration.value,
      };
      this.store.dispatch(CalcActions.calculateRate({ payload: calcData }));
    }
  }
}
