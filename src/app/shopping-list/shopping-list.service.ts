import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    ingredientAdded = new EventEmitter<Ingredient[]>();

  constructor() { }

      getIngredients() {
          return this.ingredients.slice();
      }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());
  }

  addToShoppingList(ingredients: Ingredient[]) {
    //   let ingreArray = this.ingredients.slice();
    //   console.log(ingredients);
    //   for (let ele of ingreArray) {
    //       for(let ingre of ingredients) {
    //           if (ingre.name === ele.name) {
    //               ele.amount += ingre.amount;
    //               ingredients = ingredients.filter((e) => e.name !== ingre.name);
    //           }
    //       } 
    //   }
      this.ingredients.push(...ingredients);
      
      this.ingredientAdded.emit(this.ingredients.slice());
  }
}
