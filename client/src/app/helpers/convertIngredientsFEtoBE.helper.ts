import { Ingredient, IngredientBE } from "../types/enums/ingredient.enum";

// a workaround to convert the enum from FE to BE
export function convertIngredientsFeToBe(ingredients: Ingredient[]): IngredientBE[] {
    return ingredients.map(ing => IngredientBE[ing])
}
