// import { HttpClient } from '@angular/common/http';
import { Component, Input, booleanAttribute, numberAttribute, output } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent {
  recipes: any[] = [];
  @Input({transform: trimString}) label : string = '';
  @Input({transform: appendPx}) widthPx: string = '';
  @Input({transform: booleanAttribute}) disabled :any;
  @Input({transform: numberAttribute}) number:any;
  onNameChange = output<string>();
  get value(): number {
    return this.internalValue;
  }
  set value(newValue: number) {
    this.internalValue = newValue;
  }
  private internalValue = 0

  constructor(private router : Router, private recipeService : RecipeService) { }
  ngOnInit(): void {
    console.log(typeof this.number);
    
    this.getItems();
  }

  getItems() {
    this.recipeService.getAllRecipes().subscribe((recipe: any )=> {
      this.recipes = recipe;
      console.log(this.recipes);  
    });
  }

  onAddRecipe(): void {
    this.onNameChange.emit("xxxxx")
  // this.recipeService.addRecipe().forEach((recipe: any) => {
  //   this.getItems();
  //   console.log(recipe);
  //   // this.recipes = recipe
  // });
  }


}

function trimString(value: string | undefined) {
  return value?.trim() ?? '';
}

function appendPx(value: number) {
  return `${value}px`;
}