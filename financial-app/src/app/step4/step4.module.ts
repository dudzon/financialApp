import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { Step4Component } from './components/smart/step4/step4.component';
import { Step4RoutingModule } from './step4-routing.module';

@NgModule({
  declarations: [Step4Component],
  imports: [CommonModule, SharedModule, Step4RoutingModule],
})
export class Step4Module {}
