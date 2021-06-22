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
import { NotificationComponent } from './components/notification/notification.component';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { environment } from './../environments/environment.dev';

const Effects = [WizardEffects];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LanguageTogglerComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    EffectsModule.forRoot(Effects),
    StoreModule.forRoot({ wizard: reducer }),
    SocialLoginModule,
    WizardModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.OAUTH_CLIENT_ID as string
            ),
          },
        ],
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
