import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { RouterLink } from '@angular/router';
import { Food } from '../../../shared/models/Food';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService) {
    this.foods = foodService.getAll();
  }
}
