import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormComponent } from '@app/wizard/models/form-component';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
} from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {
    console.log(this.field, 'field from input component');
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
