import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { authTokenInterceptor } from './core/interceptors/auth-token.interceptor';
import { CartStore } from './features/cart/cart.store';

/**
 * Global application providers for standalone Angular app
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),                       // enables fetch for SSR
      withInterceptors([authTokenInterceptor])
    ),
    CartStore
  ]
};
