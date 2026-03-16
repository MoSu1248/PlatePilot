import { Component } from '@angular/core';
import { RecipeCard } from './components/recipe-card/recipe-card';

@Component({
  selector: 'app-recipe',
  imports: [RecipeCard],
  templateUrl: './recipe.html',
  styleUrl: './recipe.scss',
})
export class RecipeComponent {}
