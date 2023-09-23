import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'normalizeEnum',
    standalone: true,
})
export class NormalizeEnumPipe implements PipeTransform {
    transform(value: string | string[] | undefined): string {
        if (Array.isArray(value)) {
            return value.map((v) => this.capitalizeIngredient(v)).join(', ')
        }

        if (typeof value !== 'string' || !value?.length) {
            return ''
        }

        return this.capitalizeIngredient(value)
    }

    capitalizeIngredient(value: string): string {
        const firstLetter = value.charAt(0).toUpperCase()
        const lowercaseValue = value.toLowerCase().slice(1)

        return `${firstLetter}${lowercaseValue}`.replace('_', ' ')
    }
}
