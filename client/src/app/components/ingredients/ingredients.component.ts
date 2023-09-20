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
    ingredients: Ingredient[] = []

    handleSelectIngredients(ingredients: Ingredient[]) {
        console.log(ingredients)
        this.ingredients = ingredients
    }

    handleDeleteIngredient(ingredient: Ingredient) {
        this.ingredients = this.ingredients.filter((i) => i !== ingredient)
    }
}