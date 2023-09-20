import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
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
export class SelectedIngredientsComponent implements OnInit, OnChanges {
    @Input() selectedIngredients: Ingredient[] = []
    @Output() handleDeleteIngredient: EventEmitter<Ingredient> =
        new EventEmitter<Ingredient>()

    constructor() {
        console.log('CONSTRUCTOR')
    }

    onDeleteIngredient(ingredient: Ingredient) {
        this.handleDeleteIngredient.emit(ingredient)
    }

    ngOnInit() {
        console.log('ON INIT', this.selectedIngredients)
    }

    ngOnChanges() {
        console.log('ON CHANGES', this.selectedIngredients)
    }

    ngAfterViewInit() {
        console.log('NG AFTER VIEW INIT')
    }

    ngOnDestroy() {
        console.log('NG ON DESTROY')
    }
}
