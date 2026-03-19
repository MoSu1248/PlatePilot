import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/features/home/home';
import { RecipeComponent } from './app/features/recipe/recipe';
import { AboutComponent } from './app/features/about/about';
import { provideHttpClient } from '@angular/common/http';
import { RecipeDetailComponent } from './app/features/recipe/recipe-detail/recipe-detail/recipe-detail';

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'recipes', component: RecipeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'recipes/:slug', component: RecipeDetailComponent },
    ]),
    provideHttpClient(),
  ],
});
