import {
    Directive,
    ElementRef,
    Input,
    OnChanges,
    Renderer2,
} from '@angular/core'
import { Ingredient } from '../types/enums/ingredient.enum'

// This is a custom directive that is used to highlight the pizza card if it contains chilli peppers
// Directives are used to manipulate the DOM (attach its-left to an element and change its properties)
@Directive({
    selector: '[appHotPizza]',
    standalone: true, // Directives can also be used as standalone "components"
})
export class HotPizzaDirective implements OnChanges {
    // The directive will receive the ingredients as an input same as in a component
    @Input() ingredients: Ingredient[] | undefined = []

    // These are default parameters in each directive
    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {}

    // This method is called when the input changes. Each directive has a lifecycle same as a component
    ngOnChanges() {
        if (!this.ingredients?.length) {
            return
        }

        const hasChilliPeppers = this.ingredients.includes(
            Ingredient.CHILLI_PEPPER
        )

        if (hasChilliPeppers) {
            // The renderer is used to manipulate the DOM
            this.renderer.setStyle(
                this.el.nativeElement,
                'border',
                '1px solid red'
            )
        } else {
            this.renderer.removeStyle(this.el.nativeElement, 'border')
        }
    }
}
