import { MatGridListModule } from '@angular/material/grid-list'
import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PizzaCardComponent } from '../pizza-card/pizza-card.component'
import { Pizza } from '../../types/interfaces/pizza.interface'
import { PizzaService } from '../../services/pizza.service'

@Component({
    selector: 'app-pizza-cards',
    standalone: true,
    imports: [CommonModule, MatGridListModule, PizzaCardComponent],
    templateUrl: './pizza-cards.component.html',
    styleUrls: ['./pizza-cards.component.scss'],
})
export class PizzaCardsComponent implements OnInit {
    pizzas: Pizza[] = []

    constructor(private pizzaService: PizzaService) {}

    ngOnInit() {
        this.pizzas = this.pizzaService.defaultPizzas
    }
}
