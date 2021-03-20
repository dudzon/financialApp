import { NgModule } from '@angular/core';

import { LoginComponent } from './components/smart/login/login.component';
import { SharedModule } from '@app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, LoginRoutingModule],
})
export class LoginModule {}
