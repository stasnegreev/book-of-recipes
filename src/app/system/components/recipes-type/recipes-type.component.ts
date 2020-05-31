import { Component, OnInit } from '@angular/core';
import { RecipeTypesNames } from '../../../shared/constans/recipe-types-names';

@Component({
  selector: 'app-recipes-type',
  templateUrl: './recipes-type.component.html',
  styleUrls: ['./recipes-type.component.scss']
})
export class RecipesTypeComponent implements OnInit {
  public recipeTypes = RecipeTypesNames;

  constructor() { }

  ngOnInit(): void {
  }

}
