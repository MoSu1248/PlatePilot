import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipe.modal';
import { switchMap, map } from 'rxjs/operators';
import { Footer } from '../../../../shared/components/footer/footer';
import { MoreRecipies } from '../../components/more-recipes/more-recipies/more-recipies';

@Component({
  selector: 'app-recipe-detail',
  imports: [Footer, MoreRecipies],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.scss',
})
export class RecipeDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private cd: ChangeDetectorRef,
  ) {}
  recipe!: Recipe;
  recipes: Recipe[] = [];

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const slug = params.get('slug');

          return this.recipeService
            .getRecipes()
            .pipe(
              map((recipes) => recipes.find((r) => r.slug.toLowerCase() === slug?.toLowerCase())),
            );
        }),
      )
      .subscribe((recipe) => {
        this.recipe = recipe!;
        this.cd.detectChanges();
      });
  }
}
