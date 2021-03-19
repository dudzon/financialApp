import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
// import { appReducer } from './store/app.reducer';
import { LoginModule } from './login/login.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LanguageTogglerComponent } from './components/language-toggler/language-toggler.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LanguageTogglerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SharedModule,
    HttpClientModule,
    // EffectsModule.forRoot([]),
    // StoreModule.forRoot(appReducer),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
