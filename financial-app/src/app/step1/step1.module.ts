import { NgModule } from '@angular/core';

import { Step1Component } from './components/smart/step1/step1.component';
import { SharedModule } from '@app/shared/shared.module';
import { Step1RoutingModule } from './step1-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Step1Component],
  imports: [CommonModule, SharedModule, Step1RoutingModule],
})
export class Step1Module {}
