import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http : HttpClient) { }

  getAllRecipes() {
    return this.http.get('http://localhost:3000/api/recipes');
  }
 
  addRecipe() {
    return this.http.post('http://localhost:3000/api/recipes/add-recipe',null);
  }
}
