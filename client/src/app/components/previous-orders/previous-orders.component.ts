import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PizzaService } from 'src/app/services/pizza.service';
import { Observable, switchMap } from 'rxjs';
import { Pizza } from 'src/app/types/interfaces/pizza.interface';

@Component({
  selector: 'app-previous-orders',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './previous-orders.component.html',
  styleUrls: ['./previous-orders.component.scss']
})
export class PreviousOrdersComponent implements OnInit {
  pizzas$: Observable<Pizza[]> = new Observable<Pizza[]>()

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.pizzas$ = this.pizzaService.getSavedPizzas()
  }

  onDelete(id: number) {

    // This is how we do it
    // Steps executed in order
    // 1. Delete the pizza (by id)
    // 2. Get the list of pizzas (after the delete)
    // 3. Update the list of pizzas
    this.pizzas$ = this.pizzaService.deletePizza(id).pipe(
      switchMap(() => this.pizzaService.getSavedPizzas())
    )

    // THIS IS VERY BAD - Never subscribe in a subscribe!!! Use pipe and merge the streams into a single stream
    // this.pizzaService.deletePizza(id).subscribe(isDeleted => {
    //   // if it's deleted

    //   this.pizzaService.getSavedPizzas().subscribe(pizzas => {

    //   })
    // })

    // THis is ok but we don't update the list of pizzas
    // this.pizzaService.deletePizza(id).subscribe()
  }
}
