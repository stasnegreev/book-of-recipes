import { OptionModel } from '../models/option.model';
import { RecipeTypesNames } from './recipe-types-names';

export const RECIPE_TYPES: OptionModel[] = [
  {
    name: 'Завтраки',
    value: RecipeTypesNames.BREAKFAST,
  },
  {
    name: 'Обеды',
    value: RecipeTypesNames.LUNCH,
  },
  {
    name: 'Ужины',
    value: RecipeTypesNames.DINNER,
  },
  {
    name: 'Перекусы',
    value: RecipeTypesNames.SNACKS,
  },
];
