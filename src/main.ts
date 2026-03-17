import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/features/home/home';
import { RecipeComponent } from './app/features/recipe/recipe';
import { AboutComponent } from './app/features/about/about';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'recipes', component: RecipeComponent },
      { path: 'about', component: AboutComponent },
    ]),
    provideHttpClient(), 
  ],
});
