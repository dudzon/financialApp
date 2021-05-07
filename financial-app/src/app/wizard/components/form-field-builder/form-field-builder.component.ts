import {
  Component,
  ComponentFactoryResolver,
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
import { FormControl } from '@angular/forms';
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
  @Input() control!: FormControl;

  @ViewChild(AddComponentDirective, { static: true })
  addComponent!: AddComponentDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
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
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<FormComponent>(
      component
    );

    const viewContainerRef = this.addComponent.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<FormComponent>(
      componentFactory
    );
    componentRef.instance.field = this.field;
    // @ts-ignore
    componentRef.instance.control = this.control;
  }
}
