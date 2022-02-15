import { Component, OnInit, ViewChild } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10),
    ];

    constructor() {}

    ngOnInit() {}

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
} 
