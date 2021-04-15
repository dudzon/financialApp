import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WizardComponent } from './wizard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: WizardComponent,
  },
  {
    path: 'calc',
    component: WizardComponent,
  },
  {
    path: 'step1',
    component: WizardComponent,
  },
  {
    path: 'step2',
    component: WizardComponent,
  },
  {
    path: 'step3',
    component: WizardComponent,
  },
  {
    path: 'step4',
    component: WizardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WizardRoutingModule {}
