import { IngredientModel } from './ingredient.model';

export class RecipeModel {
  type: string;
  owner: string;
  name: string;
  instruction: string;
  ingredients: IngredientModel[];
  ingredientsList: string[];
  rating?: number;
  isInList?: boolean;
  count?: number;
  id?: string;
  groups?: string[];
  nameForSearch?: string[];

  constructor(data) {
    this.type = data.type;
    this.owner = data.owner;
    this.name = data.name.toLowerCase();
    this.instruction = data.instruction;
    this.ingredientsList = data.ingredientsList ? data.ingredientsList.map((ingredient: string) => ingredient.toLowerCase()) : [];
    this.rating = data.rating;
    this.ingredients = data.ingredients ? data.ingredients.map((ingredient: IngredientModel) => {
      ingredient.name = ingredient.name.toLowerCase();
      return ingredient;
    }) : [];
    this.groups = data.groups ? data.groups.map((group: string) => {
      group = group.toLowerCase();
      return group;
    }) : [];
    const nameForSearch = new Set<string>();
    data.name.split(' ').forEach((word) => {
      nameForSearch.add(word.slice(0, 1));
      nameForSearch.add(word.slice(0, 2));
      nameForSearch.add(word.slice(0, 3));
    });
    this.nameForSearch = Array.from(nameForSearch);
    if (data.id) {
      this.id = data.id;
    }
  }
}
