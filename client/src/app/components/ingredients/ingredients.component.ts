import { Component, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IngredientsListComponent } from '../ingredients-list/ingredients-list.component'
import { SelectedIngredientsComponent } from '../selected-ingredients/selected-ingredients.component'
import { Ingredient } from '../../types/enums/ingredient.enum'
import { PizzaService } from 'src/app/services/pizza.service'
import { Subscription } from 'rxjs'

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
export class IngredientsComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[] = [] // Main source of truth for ingredients. This represents the ingredients that have been selected by the user.
    subscription: Subscription = new Subscription()

    constructor(private pizzaService: PizzaService) {}

    ngOnInit() {
        this.subscription = this.pizzaService.selectedIngredients$.subscribe(
            (ingredients) => {
                this.ingredients = ingredients
            }
        )
    }

    handleSelectIngredients(ingredients: Ingredient[]) {
        // upon selecting an ingredient, add it to the list of ingredients
        this.ingredients = ingredients
    }

    handleDeleteIngredient(ingredient: Ingredient) {
        // upon deleting an ingredient, remove it from the list of ingredients
        this.ingredients = this.ingredients.filter((i) => i !== ingredient)
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}
