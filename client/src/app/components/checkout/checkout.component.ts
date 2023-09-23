import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { PizzaService } from 'src/app/services/pizza.service'

// Component for checkout page (third step of the order process)
@Component({
    selector: 'app-checkout',
    standalone: true,
    imports: [
        CommonModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
    ],
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
    address: FormControl<string | null> = new FormControl(
        '',
        Validators.required
    )

    constructor(private pizzaService: PizzaService) {}

    onSubmitOrder() {
        this.pizzaService.submitOrder()
    }
}
