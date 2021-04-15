import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardModule } from './wizard/wizard.module';
import { WizardEffects } from './wizard/store/wizard.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './wizard/store/wizard.reducer';
const Effects = [WizardEffects];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot(Effects),
    StoreModule.forRoot(reducer),
    WizardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
