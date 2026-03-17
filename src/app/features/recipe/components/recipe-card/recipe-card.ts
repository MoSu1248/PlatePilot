import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.modal';

@Component({
  selector: 'app-recipe-card',
  imports: [],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
  standalone: true,
})
export class RecipeCard {
  @Input() recipe!: Recipe;
}
