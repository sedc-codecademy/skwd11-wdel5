import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatListModule } from '@angular/material/list'
import { Ingredient } from '../../types/enums/ingredient.enum'
import { MatChipOption } from '@angular/material/chips'
import { NormalizeEnumPipe } from '../../pipes/normalize-enum.pipe'

@Component({
    selector: 'app-ingredients-list',
    standalone: true,
    templateUrl: './ingredients-list.component.html',
    styleUrls: ['./ingredients-list.component.scss'],
    imports: [CommonModule, MatListModule, NormalizeEnumPipe],
})
export class IngredientsListComponent {
    // selectedIngredients are used to update the selected items in the list in case of deletion in the sibling component
    @Input() selectedIngredients: Ingredient[] = []

    // onSelectIngredients is used to emit the selected items to the parent component
    @Output() onSelectIngredients: EventEmitter<Ingredient[]> =
        new EventEmitter<Ingredient[]>()

    // ingredients are used to display the INITIAL list of ingredients. This list is not updated in case of deletion in the sibling component
    // Enums are actually objects in JS/TS, so we need to use Object.values() to get the values of the enum
    ingredients: Ingredient[] = Object.values(Ingredient)

    onSelect(event: any) {
        // Emit the selected items to the parent component by using .emit() on the EventEmitter
        this.onSelectIngredients.emit(
            event.source.selectedOptions.selected.map(
                (item: MatChipOption) => item.value
            )
        )
    }
}
