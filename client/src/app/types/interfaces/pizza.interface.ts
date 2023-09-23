import { Ingredient } from '../enums/ingredient.enum'

export interface Pizza {
    id: number
    name: string
    price: number
    image: string
    ingredients: Ingredient[]
}
