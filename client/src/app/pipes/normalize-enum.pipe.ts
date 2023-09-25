import { Pipe, PipeTransform } from '@angular/core'

// This pipe is used to normalize the enum values to be more human-readable
@Pipe({
    name: 'normalizeEnum',
    standalone: true, // Pipes can also be standalone, which means they can be used without the need to import them in the module rather in a component directly
})
export class NormalizeEnumPipe implements PipeTransform {
    // Pipes don't have lyfecycles, they only have the transform method which is a default method that all pipes must have, and it's invoked when the pipe is used
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
