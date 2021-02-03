import { OptionModel } from '../models/option.model';
import { RecipeOwnersNames } from './recipe-owners-names';

export const RECIPE_OWNERS: OptionModel[] = [
  {
    name: 'Turbo Mary',
    value: RecipeOwnersNames.TURBO,
  },
  {
    name: 'MIRINOVA',
    value: RecipeOwnersNames.MIRONOVA,
  },
  {
    name: 'Другие',
    value: RecipeOwnersNames.OTHERS,
  },
];
