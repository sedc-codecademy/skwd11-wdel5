import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { PizzaCardsComponent } from '../pizza-cards/pizza-cards.component'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, PizzaCardsComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
