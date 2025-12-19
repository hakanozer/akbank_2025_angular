import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './middleware/auth-interceptor-interceptor';
import { testInterceptorInterceptor } from './middleware/test-interceptor-interceptor';

import { LOCALE_ID } from '@angular/core';
import localeTr from '@angular/common/locales/tr';
import { registerLocaleData } from '@angular/common';
import { provideStore } from '@ngrx/store';
import { basketReducer } from './redux/reducers/basket.reducer';
registerLocaleData(localeTr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({basket: basketReducer}),
    provideHttpClient(
      withInterceptors([authInterceptor, testInterceptorInterceptor])
    ),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'tr-TR' }
  ]
};
