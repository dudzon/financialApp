import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';
import { WizardComponent } from './wizard.component';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { SelectComponent } from './components/select/select.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonComponent } from './components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormFieldBuilderComponent } from './components/form-field-builder/form-field-builder.component';
import { AddComponentDirective } from './directives/add-component.directive';
import { ProgressComponent } from '../wizard/components/progress/progress.component';
import { RouterModule } from '@angular/router';
import { CalcContentComponent } from '../components/calc-content/calc-content.component';

@NgModule({
  declarations: [
    WizardComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    DatepickerComponent,
    CheckboxComponent,
    ButtonComponent,
    FormBuilderComponent,
    FormFieldBuilderComponent,
    AddComponentDirective,
    ProgressComponent,
    CalcContentComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    WizardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    WizardRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class WizardModule {}
