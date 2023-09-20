import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatListModule } from '@angular/material/list'
import { Ingredient } from '../../types/enums/ingredient.enum'
import { MatChipOption } from '@angular/material/chips'

@Component({
    selector: 'app-ingredients-list',
    standalone: true,
    templateUrl: './ingredients-list.component.html',
    styleUrls: ['./ingredients-list.component.scss'],
    imports: [CommonModule, MatListModule],
})
export class IngredientsListComponent {
    @Input() selectedIngredients: Ingredient[] = []
    @Output() onSelectIngredients: EventEmitter<Ingredient[]> =
        new EventEmitter<Ingredient[]>()
    ingredients: Ingredient[] = Object.values(Ingredient)

    onSelect(event: any) {
        this.onSelectIngredients.emit(
            event.source.selectedOptions.selected.map(
                (item: MatChipOption) => item.value
            )
        )
    }
}
