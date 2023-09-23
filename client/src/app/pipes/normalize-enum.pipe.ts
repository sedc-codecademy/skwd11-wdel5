import { Pipe, PipeTransform } from '@angular/core'
import { Ingredient } from '../types/enums/ingredient.enum'

@Pipe({
    name: 'normalizeEnum',
    standalone: true,
})
export class NormalizeEnumPipe implements PipeTransform {
    transform(value: string | undefined): string {
        if (typeof value !== 'string' || !value?.length) {
            return ''
        }

        const firstLetter = value.charAt(0).toUpperCase()
        const lowercaseValue = value.toLowerCase().slice(1)

        return `${firstLetter}${lowercaseValue}`.replace('_', ' ')
    }
}
