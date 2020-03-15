import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes : Recipe [] = [
    new Recipe("Recipe1", "This is the first recipe","https://www.onceuponachef.com/images/2017/12/NY-Cheesecake-760x574.jpg"),
    new Recipe("Recipe1", "This is the first recipe","https://www.onceuponachef.com/images/2017/12/NY-Cheesecake-760x574.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
