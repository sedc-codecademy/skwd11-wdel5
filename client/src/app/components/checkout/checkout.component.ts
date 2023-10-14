import { Component, OnDestroy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { PizzaService } from 'src/app/services/pizza.service'
import { Subscription } from 'rxjs'

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
export class CheckoutComponent implements OnDestroy {
    // Form control for the delivery address
    address: FormControl<string | null> = new FormControl<string | null>(
        '', // The FormControl is initialized with an empty string
        Validators.required // Required field by using Validators.required
    )
    subscription: Subscription = new Subscription()

    constructor(private pizzaService: PizzaService) {}

    onSubmitOrder() {
        // Submit the order by calling the submitOrder() method of the pizzaService. All the data is stored in the pizzaService
        // and all HTTP requests are made in the pizzaService (or any other service). The component is only used to display the data.
        this.subscription = this.pizzaService.submitOrder(this.address.value ?? '').subscribe()
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}
