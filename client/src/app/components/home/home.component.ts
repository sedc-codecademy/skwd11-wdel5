import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { PizzaCardsComponent } from '../pizza-cards/pizza-cards.component'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        PizzaCardsComponent,
        MatCardModule,
        MatButtonModule,
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
