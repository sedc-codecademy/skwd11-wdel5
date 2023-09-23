import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { Pizza } from '../../types/interfaces/pizza.interface'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { HotPizzaDirective } from '../../directives/hot-pizza.directive'
import { NormalizeEnumPipe } from 'src/app/pipes/normalize-enum.pipe'

@Component({
    selector: 'app-pizza-card',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatChipsModule,
        HotPizzaDirective,
        NormalizeEnumPipe,
    ],
    templateUrl: './pizza-card.component.html',
    styleUrls: ['./pizza-card.component.scss'],
})
export class PizzaCardComponent {
    // Input property to receive the pizza object from the parent component. It is undefined by default or when no value is passed from the parent component.
    @Input() pizza: Pizza | undefined
}
