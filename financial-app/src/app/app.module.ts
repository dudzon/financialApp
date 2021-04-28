import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardModule } from './wizard/wizard.module';
import { WizardEffects } from './wizard/store/wizard.effects';
import { reducer } from './wizard/store/wizard.reducer';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LanguageTogglerComponent } from './components/language-toggler/language-toggler.component';

const Effects = [WizardEffects];
@NgModule({
  declarations: [AppComponent, NavbarComponent, LanguageTogglerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    EffectsModule.forRoot(Effects),
    StoreModule.forRoot({ wizard: reducer }),
    WizardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
