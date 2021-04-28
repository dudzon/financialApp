import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormComponent } from '@app/wizard/models/form-component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

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
  @Input() data: any;
  @Input() field: any;
  @Input() controlName: any;
  @Input() placeholder: any;
  @Output() changed = new EventEmitter<string>();

  public value = 'dupa';
  public onChange!: (value: string) => void;
  public onTouched!: () => void;
  public isDisabled!: boolean;
  // public field!: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.controlName, 'from input component');
    console.log(this.field, 'field from input component');
    console.log(this.data, 'from input component');
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
}

// import { Component, OnInit, ViewContainerRef } from '@angular/core';
// import { FormGroup } from '@angular/forms';
// import { FormComponent } from '@app/wizard/models/form-component';

// @Component({
//   selector: 'app-input',
//   styleUrls: ['./input.component.css'],
//   template: `
//     <div [formGroup]="group">
//       <label>{{ config.label }}</label>
//       <input
//         type="text"
//         [attr.placeholder]="config.placeholder"
//         [formControlName]="config.name"
//       />
//     </div>
//   `,
// })
// export class InputComponent implements OnInit, FormComponent {
//   config: any;
//   group!: FormGroup;

//   ngOnInit(): void {
//     console.log(this.config, 'config from Input');
//   }
// }
