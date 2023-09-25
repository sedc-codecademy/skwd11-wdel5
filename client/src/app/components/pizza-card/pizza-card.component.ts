import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { Pizza } from '../../types/interfaces/pizza.interface'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { HotPizzaDirective } from '../../directives/hot-pizza.directive'
import { NormalizeEnumPipe } from 'src/app/pipes/normalize-enum.pipe'
import { MatIconModule } from '@angular/material/icon'
import { PizzaService } from 'src/app/services/pizza.service'
import { Router } from '@angular/router'
import { MatButtonModule } from '@angular/material/button'

@Component({
    selector: 'app-pizza-card',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatChipsModule,
        HotPizzaDirective,
        NormalizeEnumPipe,
        MatIconModule,
        MatButtonModule,
    ],
    templateUrl: './pizza-card.component.html',
    styleUrls: ['./pizza-card.component.scss'],
})
export class PizzaCardComponent {
    // Input property to receive the pizza object from the parent component. It is undefined by default or when no value is passed from the parent component.
    @Input() pizza: Pizza | undefined

    constructor(
        private pizzaService: PizzaService,
        private router: Router
    ) {}

    selectPizza() {
        // Update the selected ingredients in the pizza service and navigate to the pizza maker page where the ingredients will be pre-selected.
        this.pizzaService.updateSelectedIngredients(
            this.pizza?.ingredients ?? []
        )
        this.router.navigate(['/pizza-maker'])
    }
}
