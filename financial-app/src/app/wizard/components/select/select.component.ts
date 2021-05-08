import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { FormComponent } from '@app/wizard/models/form-component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements OnInit, FormComponent {
  constructor() {}

  @Input() field: any;
  @Input() control!: FormControl;
  @Input() placeholder: any;

  public value!: string;

  public isDisabled!: boolean;

  ngOnInit(): void {
    this.control.setValidators(this.setValidatorsForControl());
    this.control.updateValueAndValidity();
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

  onChanged(event: MatSelectChange): void {
    const value = event.value ? event.value : null;

    this.value = value;
    this.onChange(value);
  }
  private onChange: any = () => {};
  private onTouched: any = () => {};

  private setValidator(validatorName: string): ValidatorFn {
    let validator: ValidatorFn;
    switch (validatorName) {
      case 'required':
        validator = Validators.required;
        break;
      default:
        throw new Error('No Validator found');
    }
    return validator;
  }
  private setValidatorsForControl(): ValidatorFn[] {
    let validators = this.field.valid;
    const newValidators: any[] = [];
    validators = validators.map((validatorName: string) => {
      const newValidator = this.setValidator(validatorName);
      newValidators.push(newValidator);
    });

    return newValidators;
  }
}
