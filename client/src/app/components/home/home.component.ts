import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Pizza } from '../../types/interfaces/pizza.interface';
import { PizzaCardComponent } from '../pizza-card/pizza-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatGridListModule, PizzaCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  pizzas: Pizza[] = [
    {
      id: 1,
      name: 'Napolitana',
      price: 5,
      image: '/assets/neapolitan.png',
      ingredients: ['tomato sauce', 'cheese'],
    },
    {
      id: 2,
      name: 'Capricciosa',
      price: 6,
      image: '/assets/capri.png',
      ingredients: ['tomato sauce', 'cheese', 'mushrooms'],
    },
    {
      id: 3,
      name: 'Margarita',
      price: 2,
      image: '/assets/margherita.png',
      ingredients: ['tomato sauce', 'cheese', 'mushrooms'],
    },
  ];
  // @Input() description: string = '';
  // counter: number = 0;
  // onClick() {
  //   console.log('Button clicked');
  //   this.counter++;
  // }
}
