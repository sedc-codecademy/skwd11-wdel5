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
    pizzas: Pizza[] = [] // this represents the list of pizzas to be displayed in the grid list
    breakpoint: number = 3 // this represents the number of columns in the grid list

    constructor(private pizzaService: PizzaService) {}

    ngOnInit() {
        // ngOnInit is a lifecycle hook that is called after Angular has initialized this component
        this.pizzas = this.pizzaService.defaultPizzas
    }

    onResize(event: any) {
        // this function is called whenever the window is resized because of the (window:resize) event listener in the template
        this.breakpoint = Math.floor(event.target.innerWidth / 320)
    }
}
