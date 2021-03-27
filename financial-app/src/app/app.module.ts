import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { appReducer } from './store/app.reducer';
import { LoginModule } from './login/login.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LanguageTogglerComponent } from './components/language-toggler/language-toggler.component';
import { CalcEffects } from '@app/calc/store/calc.effects';
import { Step1Effects } from './step1/store/step1.effects';
import { Step2Effects } from './step2/store/step2.effects';
import { Step3Effects } from './step3/store/step3.effects';
import { Step4Effects } from './step4/store/step4.effects';
import { LoginEffects } from './login/store/login.effects';

const AppEffects = [
  LoginEffects,
  CalcEffects,
  Step1Effects,
  Step2Effects,
  Step3Effects,
  Step4Effects,
];

@NgModule({
  declarations: [AppComponent, NavbarComponent, LanguageTogglerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SharedModule,
    HttpClientModule,
    EffectsModule.forRoot(AppEffects),
    StoreModule.forRoot(appReducer),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
