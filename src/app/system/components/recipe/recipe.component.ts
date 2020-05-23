import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent  {
  @Input()
  public recipe: RecipeModel;
}
