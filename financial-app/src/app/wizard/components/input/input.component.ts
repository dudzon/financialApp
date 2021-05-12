import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormComponent } from '@app/wizard/models/form-component';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
} from '@angular/forms';
import { BaseValidator } from '@app/wizard/classes/base-validator';

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
  extends BaseValidator
  implements OnInit, FormComponent, ControlValueAccessor
{
  @Input() field: any;
  @Input() control!: FormControl;
  @Input() placeholder: any;

  public errorMessage!: string;
  constructor() {
    super();
  }
  ngOnInit(): void {
    this.control.setValidators(this.setValidatorsForControl(this.field));
    this.control.updateValueAndValidity();
    this.errorMessage = this.setValidationMessages(this.control);
  }
  // tslint:disable-next-line:member-ordering
  public value!: string;

  // tslint:disable-next-line:member-ordering
  public isDisabled!: boolean;

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

  public onInputFocused(): void {
    console.log(this.control, 'control focus');
    this.control.patchValue('');
  }
  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  private onChange: any = () => {};
  private onTouched: any = () => {};
}
