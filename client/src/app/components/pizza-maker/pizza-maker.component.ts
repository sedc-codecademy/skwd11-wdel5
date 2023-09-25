import { Subscription } from 'rxjs'
import { Pizza } from '../../types/interfaces/pizza.interface'
import { CommonModule } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatStepperModule } from '@angular/material/stepper'
import { IngredientsComponent } from '../ingredients/ingredients.component'
import { PreviewOrderComponent } from '../preview-order/preview-order.component'
import { CheckoutComponent } from '../checkout/checkout.component'
import { PizzaService } from 'src/app/services/pizza.service'

@Component({
    selector: 'app-pizza-maker',
    standalone: true,
    templateUrl: './pizza-maker.component.html',
    styleUrls: ['./pizza-maker.component.scss'],
    imports: [
        CommonModule,
        MatStepperModule,
        IngredientsComponent,
        PreviewOrderComponent,
        CheckoutComponent,
    ],
})
export class PizzaMakerComponent implements OnInit, OnDestroy {
    hasOrders: boolean = false // flag to enable/disable going to the next step
    subscription: Subscription = new Subscription() // we subscribe to the activeOrder$ observable to know if we have orders

    constructor(private pizzaService: PizzaService) {}

    ngOnInit() {
        this.subscription = this.pizzaService.activeOrder$.subscribe(
            (order: Pizza[]) => {
                this.hasOrders = !!order?.length
            }
        )
    }

    ngOnDestroy(): void {
        // unsubscribe to avoid memory leaks
        this.subscription.unsubscribe()
    }
}
