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

@Component({
    selector: 'app-selected-ingredients',
    standalone: true,
    imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
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

    constructor() {
        // Lifecycle method 1. This will only be called once when the CLASS is first initialized.
        console.log('CONSTRUCTOR')
    }

    onDeleteIngredient(ingredient: Ingredient) {
        // Emit the ingredient that is to be deleted from the list of selected ingredients.
        this.handleDeleteIngredient.emit(ingredient)
    }

    ngOnInit() {
        // Lifecycle method 3. This will only be called once when the COMPONENT is first initialized.
        // It's used to do things that need to be done after the COMPONENT is initialized like making API calls, etc.
        console.log('ON INIT', this.selectedIngredients)
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
