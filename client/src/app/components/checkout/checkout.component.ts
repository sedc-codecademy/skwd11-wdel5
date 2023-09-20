import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

// Component for checkout page (third step of the order process)
@Component({
    selector: 'app-checkout',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {}
