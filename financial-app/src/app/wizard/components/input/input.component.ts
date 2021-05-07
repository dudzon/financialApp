import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormComponent } from '@app/wizard/models/form-component';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
} from '@angular/forms';
import * as fromWizard from '../../store/wizard.reducer';
import * as WizardActions from '../../store/wizard.actions';
import * as fromWizardSelectors from '../../store/wizard.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent
  implements OnInit, FormComponent, ControlValueAccessor {
  @Input() field: any;
  @Input() control!: FormControl;
  @Input() placeholder: any;

  public value!: string;

  public isDisabled!: boolean;

  constructor(private store: Store<fromWizard.State>) {}

  ngOnInit(): void {
    // console.log(this.field, 'field from input component');
    // console.log(this.control, 'control');
    // this.control.valueChanges.subscribe((val: string) => {
    //   // this.store.dispatch(
    //   //   WizardActions.updateLoanAmount({ payload: { value: val } })
    //   // );
    //   this.updateState(val);
    // });
    //here maybe dispatch
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onValueChange(value: string): void {
    this.writeValue(value);
    this.onChange(value);
  }

  public onInputBlurred(): void {
    this.onTouched();
  }
  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  private onChange: any = () => {};
  private onTouched: any = () => {};

  // public updateState(val: string): void {
  //   console.log(this.store, 'store from updateState');
  //   switch (this.field.field) {
  //     case 'Loan Amount':
  //       this.store.dispatch(
  //         WizardActions.updateLoanAmount({ payload: { value: val } })
  //       );
  //       break;
  //     case 'Loan duration':
  //   }
  // }
}
