import { IngredientBE } from "../enums/ingredient.enum";

export interface OrderBE {
    addressTo: string;
    pizzas: PizzaBE[];
    orderPrice: number;
}

export interface PizzaBE {
    name: string;
    price: number;
    ingredients: IngredientBE[];
}