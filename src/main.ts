import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { Home } from './app/features/home/home';
import { Recipe } from './app/features/recipe/recipe';
import { Favourites } from './app/features/favourites/favourites';

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: Home },
      { path: 'recipes', component: Recipe },
      { path: 'favorites', component: Favourites },
    ]),
  ],
});
