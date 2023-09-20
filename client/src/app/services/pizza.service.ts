import { Ingredient } from '../types/enums/ingredient.enum'
import { Pizza } from '../types/interfaces/pizza.interface'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class PizzaService {
    defaultPizzas: Pizza[] = [
        {
            id: 1,
            name: 'Margherita',
            price: 5,
            image: '/assets/margherita.png',
            ingredients: [Ingredient.TOMATO_SAUCE, Ingredient.MOZZARELLA],
        },
        {
            id: 2,
            name: 'Neapolitan',
            price: 5,
            image: '/assets/neapolitan.png',
            ingredients: [
                Ingredient.TOMATO_SAUCE,
                Ingredient.MOZZARELLA,
                Ingredient.HAM,
            ],
        },
        {
            id: 3,
            name: 'Quatro Formagi',
            price: 6,
            image: '/assets/quatro-formagi.png',
            ingredients: [
                Ingredient.PARMESAN,
                Ingredient.MOZZARELLA,
                Ingredient.BLUE_CHEESE,
                Ingredient.GORGONZOLA,
            ],
        },
        {
            id: 4,
            name: 'Bacon',
            price: 6,
            image: '/assets/bacon.png',
            ingredients: [
                Ingredient.BACON,
                Ingredient.TOMATO_SAUCE,
                Ingredient.MOZZARELLA,
            ],
        },
        {
            id: 5,
            name: 'Bianca',
            price: 6,
            image: '/assets/bianca.png',
            ingredients: [Ingredient.SOUR_CREAM],
        },
        {
            id: 6,
            name: 'Capricciosa',
            price: 6,
            image: '/assets/capri.png',
            ingredients: [
                Ingredient.HAM,
                Ingredient.TOMATO_SAUCE,
                Ingredient.MUSHROOMS,
                Ingredient.MOZZARELLA,
            ],
        },
        {
            id: 7,
            name: 'Mexicana',
            price: 6,
            image: '/assets/mexicana.png',
            ingredients: [
                Ingredient.TOMATO_SAUCE,
                Ingredient.GORGONZOLA,
                Ingredient.OLIVES,
                Ingredient.PEPPERONI,
                Ingredient.CHILLI_PEPPER,
            ],
        },
        {
            id: 8,
            name: 'Pepperoni',
            price: 6,
            image: '/assets/pepperoni.png',
            ingredients: [
                Ingredient.TOMATO_SAUCE,
                Ingredient.GORGONZOLA,
                Ingredient.PEPPERONI,
            ],
        },
        {
            id: 9,
            name: 'Tuna',
            price: 6,
            image: '/assets/tuna.png',
            ingredients: [
                Ingredient.TOMATO_SAUCE,
                Ingredient.TUNA,
                Ingredient.MOZZARELLA,
                Ingredient.ONION,
            ],
        },
        {
            id: 10,
            name: 'Vegetariana',
            price: 6,
            image: '/assets/vegetariana.png',
            ingredients: [
                Ingredient.TOMATO_SAUCE,
                Ingredient.MOZZARELLA,
                Ingredient.OLIVES,
                Ingredient.MUSHROOMS,
            ],
        },
    ]

    constructor() {}
}
