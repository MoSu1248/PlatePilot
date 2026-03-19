import { Component, Input } from '@angular/core';
import { RecipeCard } from '../../recipe-card/recipe-card';
import { Recipe } from '../../../recipe.modal';

@Component({
  selector: 'app-more-recipies',
  imports: [RecipeCard],
  templateUrl: './more-recipies.html',
  styleUrl: './more-recipies.scss',
})
export class MoreRecipies {
  @Input() allRecipes: Recipe[] = [];
  @Input() currentSlug: string = '';

  get otherRecipes() {
    return this.allRecipes.filter((r) => r.slug !== this.currentSlug).slice(0, 3);
  }
}
