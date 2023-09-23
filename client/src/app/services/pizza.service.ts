import { BehaviorSubject, Observable } from 'rxjs'
import { Ingredient } from '../types/enums/ingredient.enum'
import { Pizza } from '../types/interfaces/pizza.interface'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root', // This means that the service will be available in the whole application. It's deprecated, and will be set to 'root' as default in the following version of Angular.
})
// An Angular Service is an object (class) that can be used to share data between components.
export class PizzaService {
    private activeOrder: BehaviorSubject<Pizza[]> = new BehaviorSubject<
        Pizza[]
    >([])

    activeOrder$: Observable<Pizza[]> = this.activeOrder.asObservable()

    updateActiveOrder(order: Pizza[]): void {
        this.activeOrder.next(order)
    }

    private selectedIngredients: BehaviorSubject<Ingredient[]> =
        new BehaviorSubject<Ingredient[]>([])

    selectedIngredients$: Observable<Ingredient[]> =
        this.selectedIngredients.asObservable()

    updateSelectedIngredients(ingredients: Ingredient[]): void {
        this.selectedIngredients.next(ingredients)
    }

    constructor() {}

    updatePizzaTitle(id: number, name: string) {
        const order = this.activeOrder.getValue()
        const index = order.findIndex((p) => p.id === id)
        order[index].name = name
        this.updateActiveOrder(order)
    }

    submitOrder() {
        console.log('Submitting order', this.activeOrder.getValue())
    }

    deletePizzaFromOrder(index: number) {
        const order = this.activeOrder.getValue().splice(index, 1)

        this.updateActiveOrder(order)
    }

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
}
