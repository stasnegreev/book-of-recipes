export class RecipeModel {
  type: string;
  name: string;
  instruction: string;
  ingList?: string;
  time?: string;
  rating?: number;

  constructor(data) {
    Object.assign(this, data);
  }
}
