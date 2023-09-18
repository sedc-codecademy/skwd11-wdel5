import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pizza } from '../../types/interfaces/pizza.interface';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-pizza-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule],
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss'],
})
export class PizzaCardComponent {
  @Input() pizza: Pizza | undefined;
}
