import { PizzaService } from './../../services/pizza.service'
import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatStepperModule } from '@angular/material/stepper'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { RouterLink } from '@angular/router'
import { Observable } from 'rxjs'
import { Pizza } from '../../types/interfaces/pizza.interface'
import { NormalizeEnumPipe } from '../../pipes/normalize-enum.pipe'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'

// Component for previewing order (second step of the order process)
@Component({
    selector: 'app-preview-order',
    standalone: true,
    templateUrl: './preview-order.component.html',
    styleUrls: ['./preview-order.component.scss'],
    imports: [
        CommonModule,
        MatListModule,
        MatButtonModule,
        MatStepperModule,
        MatIconModule,
        RouterLink,
        NormalizeEnumPipe,
        MatTooltipModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
    ],
})
export class PreviewOrderComponent implements OnInit {
    activeOrder$: Observable<Pizza[]> = new Observable<Pizza[]>() // Local Observable of active order
    showTitleInput: boolean = false // Boolean for showing/hiding title input
    pizzaTitle: FormControl<string | null> = new FormControl<string | null>(
        '', // Default value for title input
        Validators.compose([Validators.required, Validators.minLength(3)]) // Validators for title input, title must be at least 3 characters long and is required. Multiple validators are composed together by using the compose() method
    )

    constructor(private pizzaService: PizzaService) {}

    ngOnInit(): void {
        this.activeOrder$ = this.pizzaService.activeOrder$
    }

    calculateTotalPrice(order: Pizza[] | null): number {
        if (!order) {
            return 0
        }
        return order.reduce((sum, pizza) => (sum += pizza.price), 0)
    }

    onDeletePizza(index: number) {
        // Delete pizza from order in the pizza service which has all the logic and information for the order
        this.pizzaService.deletePizzaFromOrder(index)
    }

    showPizzaTitleInput() {
        this.showTitleInput = true
    }

    saveTitle(id: number) {
        // Update pizza title in the pizza service which has all the logic and information for the order
        this.pizzaService.updatePizzaTitle(id, this.pizzaTitle.value ?? '')
        this.pizzaTitle.setValue('')
        this.showTitleInput = false
    }
}
