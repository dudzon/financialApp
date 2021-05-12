import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
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
    canActivate: [AuthGuard],
  },
  {
    path: 'step1',
    component: WizardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'step2',
    component: WizardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'step3',
    component: WizardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'step4',
    component: WizardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WizardRoutingModule {}
