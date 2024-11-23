import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Food } from '../../../shared/models/Food';
import { CurrencyPipe } from '@angular/common';
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from "../../partials/tags/tags.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, SearchComponent, TagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.foods = foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.foods = foodService.getAllFoodsByTag(params.tag);
      else
        this.foods = foodService.getAll();
    })
  }
}
