import {
  Component,
  ComponentFactoryResolver,
  forwardRef,
  Injector,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { InputComponent } from '../input/input.component';
import { SelectComponent } from '../select/select.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { ButtonComponent } from '../button/button.component';
import { AddComponentDirective } from '@app/wizard/directives/add-component.directive';
import { FormComponent } from '@app/wizard/models/form-component';
import { NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
export type ComponentTypes =
  | InputComponent
  | SelectComponent
  | CheckboxComponent
  | DatepickerComponent
  | TextareaComponent
  | ButtonComponent;

@Component({
  selector: 'app-form-field-builder',
  templateUrl: './form-field-builder.component.html',
  styleUrls: ['./form-field-builder.component.css'],
})
export class FormFieldBuilderComponent implements OnInit {
  @Input() field: any;
  @Input() controlName: any;
  @ViewChild(AddComponentDirective, { static: true })
  addComponent!: AddComponentDirective;
  constructor(
    public injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    console.log(this.field, 'field');
    // console.log(this.controlName, 'controlname');
    this.loadComponent();
  }

  chooseComponent(field: any): any {
    let component;
    switch (field.type) {
      case 'input':
        return (component = InputComponent);
      case 'select':
        return (component = SelectComponent);
      case 'checkbox':
        return (component = CheckboxComponent);
      case 'datepicker':
        return (component = DatepickerComponent);
      case 'textarea':
        return (component = TextareaComponent);
      case 'button':
        return (component = ButtonComponent);
      default:
        throw new Error('No Component Found!');
    }
  }

  loadComponent(): void {
    const component = this.chooseComponent(this.field);
    // const ngControl = this.injector.get(NgControl);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<FormComponent>(
      // this.chooseComponent(this.field)
      component
    );

    const viewContainerRef = this.addComponent.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<FormComponent>(
      componentFactory
    );
    // ngControl.valueAccessor = componentRef.instance;
    // componentRef.instance.data = component.data;
    // componentRef.instance.field = component.field;
  }
}
