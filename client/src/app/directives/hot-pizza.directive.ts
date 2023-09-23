import { Directive, ElementRef, Input, Renderer2 } from '@angular/core'
import { Ingredient } from '../types/enums/ingredient.enum'

@Directive({
    selector: '[appHotPizza]',
    standalone: true,
})
export class HotPizzaDirective {
    @Input() ingredients: Ingredient[] | undefined = []

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {}

    ngOnChanges() {
        if (!this.ingredients?.length) {
            return
        }

        const hasChilliPeppers = this.ingredients.includes(
            Ingredient.CHILLI_PEPPER
        )

        if (hasChilliPeppers) {
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
