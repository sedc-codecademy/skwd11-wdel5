import { Ingredient } from '../types/enums/ingredient.enum'
import { PizzaSize } from '../types/enums/pizza-size.enum'
import {
    LARGE_INGREDIENT_PRICE,
    LARGE_PIZZA_PRICE,
    MEDIUM_INGREDIENT_PRICE,
    MEDIUM_PIZZA_PRICE,
    SMALL_INGREDIENT_PRICE,
    SMALL_PIZZA_PRICE,
} from '../constants/pizza-prices.const'

// Calculate the price of a pizza based on its size and ingredients
// Helper functions are used to avoid code duplication and to make the code more readable
export function calculatePizzaPrice(
    size: PizzaSize,
    ingredients: Ingredient[]
): number {
    switch (size) {
        case PizzaSize.LARGE:
            return (
                LARGE_PIZZA_PRICE + ingredients.length * LARGE_INGREDIENT_PRICE
            )
        case PizzaSize.MEDIUM:
            return (
                MEDIUM_PIZZA_PRICE +
                ingredients.length * MEDIUM_INGREDIENT_PRICE
            )
        case PizzaSize.SMALL:
            return (
                SMALL_PIZZA_PRICE + ingredients.length * SMALL_INGREDIENT_PRICE
            )
        default:
            return (
                MEDIUM_PIZZA_PRICE +
                ingredients.length * MEDIUM_INGREDIENT_PRICE
            )
    }
}
