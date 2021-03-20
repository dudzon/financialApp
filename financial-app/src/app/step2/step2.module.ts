import { NgModule } from '@angular/core';

import { Step2Component } from './components/smart/step2/step2.component';
import { SharedModule } from '@app/shared/shared.module';
import { Step2RoutingModule } from '@app/step2/step2-routing.module';

@NgModule({
  declarations: [Step2Component],
  imports: [SharedModule, Step2RoutingModule],
})
export class Step2Module {}
