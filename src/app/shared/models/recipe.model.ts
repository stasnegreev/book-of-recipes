import { IngredientModel } from './ingredient.model';

export class RecipeModel {
  type: string;
  name: string;
  instruction: string;
  ingredients: IngredientModel[];
  ingList: string;
  rating?: number;
  id?: string;

  constructor(data) {
    this.type = data.type;
    this.name = data.name;
    this.instruction = data.instruction;
    this.ingList = data.ingList;
    this.rating = data.rating;
    this.ingredients = data.ingredients;
    if (data.id) {
      this.id = data.id;
    }
  }
}
