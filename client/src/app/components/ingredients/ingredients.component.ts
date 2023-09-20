import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IngredientsListComponent } from '../ingredients-list/ingredients-list.component'
import { SelectedIngredientsComponent } from '../selected-ingredients/selected-ingredients.component'
import { Ingredient } from '../../types/enums/ingredient.enum'

@Component({
    selector: 'app-ingredients',
    standalone: true,
    templateUrl: './ingredients.component.html',
    styleUrls: ['./ingredients.component.scss'],
    imports: [
        CommonModule,
        IngredientsListComponent,
        SelectedIngredientsComponent,
    ],
})
export class IngredientsComponent {
    ingredients: Ingredient[] = [] // Main source of truth for ingredients. This represents the ingredients that have been selected by the user.

    handleSelectIngredients(ingredients: Ingredient[]) {
        // upon selecting an ingredient, add it to the list of ingredients
        this.ingredients = ingredients
    }

    handleDeleteIngredient(ingredient: Ingredient) {
        // upon deleting an ingredient, remove it from the list of ingredients
        this.ingredients = this.ingredients.filter((i) => i !== ingredient)
    }
}
