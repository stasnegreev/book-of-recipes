import { Component } from '@angular/core';
import { RecipeTypesNames } from '../../../shared/constans/recipe-types-names';
import { GeneralGroupsNames } from '../../../shared/constans/general-groups-names';

@Component({
  selector: 'app-recipes-type',
  templateUrl: './recipes-type.component.html',
  styleUrls: ['./recipes-type.component.scss']
})
export class RecipesTypeComponent {
  public recipeTypes = RecipeTypesNames;
  public generalGroupsNames = GeneralGroupsNames;
}
