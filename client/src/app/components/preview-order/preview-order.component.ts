import { PizzaService } from './../../services/pizza.service'
import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatStepperModule } from '@angular/material/stepper'
import { MatIconModule } from '@angular/material/icon'
import { RouterLink } from '@angular/router'
import { Observable } from 'rxjs'
import { Pizza } from 'src/app/types/interfaces/pizza.interface'
import { NormalizeEnumPipe } from '../../pipes/normalize-enum.pipe'

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
    ],
})
export class PreviewOrderComponent implements OnInit {
    activeOrder$: Observable<Pizza[]> = new Observable<Pizza[]>()

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
}
