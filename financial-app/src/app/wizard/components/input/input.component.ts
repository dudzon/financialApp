import {
  Component,
  forwardRef,
  Input,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { FormComponent } from '@app/wizard/models/form-component';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
  Validators,
  ValidatorFn,
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

  ngOnInit(): void {
    this.control.setValidators(this.setValidatorsForControl());
    this.control.updateValueAndValidity();
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
