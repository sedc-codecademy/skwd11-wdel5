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
    subscription: Subscription = new Subscription() // Subscription to the selectedIngredients$ observable, it's used to save
    // the subscription action and to enable us to unsubscribe from it when the component is destroyed.

    constructor(private pizzaService: PizzaService) {}

    ngOnInit() {
        // subscribe to the selectedIngredients$ observable. Each time the ingredients are updated, the subscription will be notified and the (local property) ingredients will be updated.
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
        // unsubscribe from the selectedIngredients$ observable when the component is destroyed. VERY IMPORTANT to avoid difficult to debug bugs!
        this.subscription.unsubscribe()
    }
}
