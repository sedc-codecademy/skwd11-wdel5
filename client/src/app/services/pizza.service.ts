import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs'
import { Ingredient } from '../types/enums/ingredient.enum'
import { Pizza } from '../types/interfaces/pizza.interface'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { convertIngredientsFeToBe } from '../helpers/convertIngredientsFEtoBE.helper'
import { OrderBE, PizzaBE } from '../types/interfaces/order.interface'
import { environment } from 'src/environments/environment'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
    providedIn: 'root', // This means that the service will be available in the whole application. It's deprecated, and will be set to 'root' as default in the following version of Angular.
})
// An Angular Service is an object (class) that can be used to share data between components.
export class PizzaService {
    // BehaviorSubject is a type of Subject, a subject is a special type of Observable that allows values to be multicasted to many Observers.
    // While using the service as a data store, we create the following three elements:
    // 1. A BehaviorSubject to store the active order (usually is private so that it can't be manually updated from outside the service).
    private activeOrder: BehaviorSubject<Pizza[]> = new BehaviorSubject<
        Pizza[]
    >([])

    // 2. An Observable to expose the active order value to the components.
    activeOrder$: Observable<Pizza[]> = this.activeOrder.asObservable()

    // 3. A method to update the active order value (more precisely the Behaviour subject).
    updateActiveOrder(order: Pizza[]): void {
        this.activeOrder.next(order)
    }

    // The same logic from above is applied to the selected ingredients.
    private selectedIngredients: BehaviorSubject<Ingredient[]> =
        new BehaviorSubject<Ingredient[]>([])

    selectedIngredients$: Observable<Ingredient[]> =
        this.selectedIngredients.asObservable()

    updateSelectedIngredients(ingredients: Ingredient[]): void {
        this.selectedIngredients.next(ingredients)
    }

    constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) {}

    updatePizzaTitle(id: number, name: string) {
        // We get the current active order from the BehaviourSubject by using the getValue() method.
        const order = this.activeOrder.getValue()
        // changed to filter to avoid mutating the array (filter returns a new array, unlike splice which was mutating the original array and causing issues)
        const index = order.findIndex((p) => p.id === id)
        order[index].name = name
        this.updateActiveOrder(order)
    }

    submitOrder(addressTo: string): Observable<void> {
        const pizzas = this.activeOrder.getValue()

        // converting pizza object to fit BE body definition
        const mappedPizzas = pizzas.map((pizza) => ({
            name: pizza.name,
            price: Math.round(pizza.price), // workaround as BE doesn't accept decimals
            ingredients: convertIngredientsFeToBe(pizza.ingredients)
        })) satisfies PizzaBE[] // use satisfies instead of 'as' to avoid type casting

        const order = {
            pizzas: mappedPizzas,
            addressTo,
            orderPrice: Math.round(
                pizzas.reduce((acc, pizza) => acc + pizza.price, 0)
            ) // workaround as BE doesn't accept decimals
        } satisfies OrderBE

        return this.http.post<void>(`${environment.apiUrl}/orders`, order).pipe(
            tap(() => this.router.navigate(['/'])), // tap operator is used to handle side effects like routing, notifications, etc.
            catchError((error) => { // catchError operator is used to handle errors
                if (error) {
                    this.snackBar.open(
                        error?.error?.errors?.[0] || 'Error while making an order!',
                        'Close',
                        environment.snackBarConfig
                    )
                }
                return of()
            })
        )
    }

    deletePizzaFromOrder(index: number) {
        const updatedOrder = this.activeOrder
            .getValue()
            .filter((_, i) => i !== index)

        this.updateActiveOrder(updatedOrder)
    }

    getSavedPizzas(): Observable<Pizza[]> {
        return this.http.get<Pizza[]>(`${environment.apiUrl}/Pizza`)
    }

    deletePizza(id: number): Observable<void> {
        return this.http.delete<void>(`${environment.apiUrl}/Pizza/${id}`).pipe(
            tap(() => {
                this.snackBar.open(
                    'You have successfully deleted the pizza!',
                    'Close',
                    environment.snackBarConfig
                )
            }),
            catchError((error) => {
                if (error) {
                    this.snackBar.open(
                        error?.error?.errors?.[0] || 'Error while deleting the pizza!',
                        'Close',
                        environment.snackBarConfig
                    )
                }
                return of()
            })
        )
    }

    // Default data for pizzas
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
