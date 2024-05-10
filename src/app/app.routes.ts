import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./view/pages/pages.routes').then((module) => module.PAGES_ROUTE),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./view/authentication/authentication.routes').then(
        (module) => module.AUTHENTICATION_ROUTES
      ),
  },

  {
    path: 'landing-page',
    loadChildren: () =>
      import('./view/landing-page/landing-pages.routes').then(
        (module) => module.PAGES_ROUTE
      ),
  },
];
