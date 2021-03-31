import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'calc',
    loadChildren: () => import('./calc/calc.module').then((m) => m.CalcModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'step1',
    loadChildren: () =>
      import('./step1/step1.module').then((m) => m.Step1Module),
    canActivate: [AuthGuard],
  },
  {
    path: 'step2',
    loadChildren: () =>
      import('./step2/step2.module').then((m) => m.Step2Module),
    canActivate: [AuthGuard],
  },
  {
    path: 'step3',
    loadChildren: () =>
      import('./step3/step3.module').then((m) => m.Step3Module),
    canActivate: [AuthGuard],
  },
  {
    path: 'step4',
    loadChildren: () =>
      import('./step4/step4.module').then((m) => m.Step4Module),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
