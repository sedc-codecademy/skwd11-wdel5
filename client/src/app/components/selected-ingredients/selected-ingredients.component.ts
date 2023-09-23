import { PizzaService } from './../../services/pizza.service'
import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { Ingredient } from 'src/app/types/enums/ingredient.enum'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { NormalizeEnumPipe } from '../../pipes/normalize-enum.pipe'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { PizzaSize } from 'src/app/types/enums/pizza-size.enum'
import { MatStepper } from '@angular/material/stepper'
import { Pizza } from '../../types/interfaces/pizza.interface'
import { calculatePizzaPrice } from 'src/app/helpers/calculate-price.helper'

@Component({
    selector: 'app-selected-ingredients',
    standalone: true,
    imports: [
        CommonModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        NormalizeEnumPipe,
        MatButtonToggleModule,
    ],
    templateUrl: './selected-ingredients.component.html',
    styleUrls: ['./selected-ingredients.component.scss'],
})
// Each lifecycle method needs to be specified in "implements" in order to be used
export class SelectedIngredientsComponent
    implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
    // List of all selected ingredients. Inputs should NEVER be mutated (changed) in the component, rather from the parent component that is passing the data in.
    @Input() selectedIngredients: Ingredient[] = []
    // Event emitter that will emit the ingredient that is to be deleted from the list of selected ingredients.
    @Output() handleDeleteIngredient: EventEmitter<Ingredient> =
        new EventEmitter<Ingredient>()

    size: PizzaSize = PizzaSize.MEDIUM
    activeOrder: Pizza[] = []

    constructor(
        private pizzaService: PizzaService,
        private matStepper: MatStepper
    ) {
        // Lifecycle method 1. This will only be called once when the CLASS is first initialized.
        console.log('CONSTRUCTOR')
    }

    onDeleteIngredient(ingredient: Ingredient) {
        // Emit the ingredient that is to be deleted from the list of selected ingredients.
        this.handleDeleteIngredient.emit(ingredient)
    }

    onSizeChange(event: any) {
        this.size = event.value
    }

    savePizza() {
        this.pizzaService.updateActiveOrder([
            ...this.activeOrder,
            {
                id: Date.now(),
                size: this.size,
                ingredients: this.selectedIngredients,
                name: 'Pizza',
                image: '',
                price: calculatePizzaPrice(this.size, this.selectedIngredients),
            },
        ])
        this.matStepper.next()
    }

    savePizzaAndMakeAnother() {
        this.pizzaService.updateActiveOrder([
            ...this.activeOrder,
            {
                id: Date.now(),
                size: this.size,
                ingredients: this.selectedIngredients,
                name: 'Pizza',
                image: '',
                price: calculatePizzaPrice(this.size, this.selectedIngredients),
            },
        ])

        this.selectedIngredients.forEach((i) =>
            this.handleDeleteIngredient.emit(i)
        )
    }

    onReset() {
        this.selectedIngredients.forEach((i) =>
            this.handleDeleteIngredient.emit(i)
        )
    }

    ngOnInit() {
        // Lifecycle method 3. This will only be called once when the COMPONENT is first initialized.
        // It's used to do things that need to be done after the COMPONENT is initialized like making API calls, etc.
        // console.log('ON INIT', this.selectedIngredients)

        this.pizzaService.activeOrder$.subscribe((order: Pizza[]) => {
            this.activeOrder = order
        })
    }

    ngOnChanges() {
        // Lifecycle method 2. This will be called every time the INPUTS are changed.
        // It's used to do side-actions that depend on data from inputs like filtering, sorting, recalculating, etc.
        console.log('ON CHANGES', this.selectedIngredients)
    }

    ngAfterViewInit() {
        // Lifecycle method 4. This will only be called once when the VIEW (template/HTML) is first initialized.
        // It's used to do things that need to be done after the VIEW is initialized like accessing DOM elements.
        console.log('NG AFTER VIEW INIT')
    }

    ngOnDestroy() {
        // Lifecycle method 5. This will only be called once right before the COMPONENT is destroyed.
        // It's used to clean up any things that need to be cleaned up.
        console.log('NG ON DESTROY')
    }
}
