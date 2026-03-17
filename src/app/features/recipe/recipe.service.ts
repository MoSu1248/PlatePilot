import { Injectable } from '@angular/core';
import { Api } from '../../core/services/api';
import { Recipe } from './recipe.modal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  // constructor(private apiService: Api) {}
  private dataUrl = 'assets/data/data.json';
  constructor(private http: HttpClient) {}

  // searchRecipes(query: string) {
  //   return this.apiService.get('/recipes/complexSearch', {
  //     query: query,
  //     number: 2,
  //     addRecipeInformation: true,
  //   });
  // }

  // getRecipeDetails(id: number) {
  //   return this.apiService.get(`/recipes/${id}/information`);
  // }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.dataUrl);
  }

}
