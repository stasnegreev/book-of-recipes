export class IngredientModel {
  amount: number;
  name: string;
  unit: string;

  constructor(data) {
    Object.assign(this, data);
  }
}
