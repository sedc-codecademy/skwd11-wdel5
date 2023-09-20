import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatListModule } from '@angular/material/list'
import { Ingredient } from '../../types/enums/ingredient.enum'

@Component({
    selector: 'app-ingredients-list',
    standalone: true,
    templateUrl: './ingredients-list.component.html',
    styleUrls: ['./ingredients-list.component.scss'],
    imports: [CommonModule, MatListModule],
})
export class IngredientsListComponent {
    ingredients: Ingredient[] = Object.values(Ingredient)
}
