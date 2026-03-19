import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.modal';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  imports: [RouterLink],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
  standalone: true,
})
export class RecipeCard {
  @Input() recipe!: Recipe;
}
