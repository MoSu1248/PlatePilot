import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RecipeCard } from './components/recipe-card/recipe-card';
import { RecipeService } from './recipe.service';
import { CommonModule } from '@angular/common';
import { Recipe } from './recipe.modal';
import { FormsModule } from '@angular/forms';
import { CookingTimeComponent } from './components/cooking-time-component/cooking-time-component';
import { PrepTimeComponent } from './components/prep-time-component/prep-time-component';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [RecipeCard, CommonModule, FormsModule, CookingTimeComponent, PrepTimeComponent],
  templateUrl: './recipe.html',
  styleUrls: ['./recipe.scss'],
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  allRecipes: Recipe[] = []; // full data
  searchTerm: string = '';

  constructor(
    private recipeService: RecipeService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe((data: Recipe[]) => {
      this.recipes = data;
      this.allRecipes = data;
      this.cd.detectChanges();
    });
  }

  onSearch() {
    const term = this.searchTerm.toLowerCase().trim();
    this.recipes = this.allRecipes.filter((recipe) => recipe.title.toLowerCase().includes(term));
  }

  filterCookingTime(params: number) {
    const term = this.searchTerm.toLowerCase().trim();
    this.recipes = this.allRecipes
      .filter((recipe) => recipe.cookMinutes <= params)
      .filter((recipe) => recipe.title.toLowerCase().includes(term));
  }

  filterPrepTime(params: number) {
    const term = this.searchTerm.toLowerCase().trim();
    this.recipes = this.allRecipes
      .filter((recipe) => recipe.prepMinutes <= params)
      .filter((recipe) => recipe.title.toLowerCase().includes(term));
  }

  clear() {
    this.recipeService.getRecipes().subscribe((data: Recipe[]) => {
      this.recipes = data;
      this.allRecipes = data;
      this.cd.detectChanges();
    });

    this.searchTerm = '';
  }
}
