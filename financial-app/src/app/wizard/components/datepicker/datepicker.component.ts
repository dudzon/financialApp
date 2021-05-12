import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseValidator } from '@app/wizard/classes/base-validator';
import { FormComponent } from '@app/wizard/models/form-component';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    },
  ],
})
export class DatepickerComponent
  extends BaseValidator
  implements OnInit, FormComponent
{
  constructor() {
    super();
  }

  @Input() field: any;
  @Input() control!: FormControl;

  public value!: string;

  public isDisabled!: boolean;

  public errorMessage!: string;

  ngOnInit(): void {
    this.control.setValidators(this.setValidatorsForControl(this.field));
    this.control.updateValueAndValidity();
    this.errorMessage = this.setValidationMessages(this.control);
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
}
