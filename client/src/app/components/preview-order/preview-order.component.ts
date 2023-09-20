import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

// Component for previewing order (second step of the order process)
@Component({
    selector: 'app-preview-order',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './preview-order.component.html',
    styleUrls: ['./preview-order.component.scss'],
})
export class PreviewOrderComponent {}
