import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MatStepperModule } from '@angular/material/stepper'
import { IngredientsComponent } from '../ingredients/ingredients.component'
import { PreviewOrderComponent } from '../preview-order/preview-order.component'
import { CheckoutComponent } from '../checkout/checkout.component'

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
export class PizzaMakerComponent {}
