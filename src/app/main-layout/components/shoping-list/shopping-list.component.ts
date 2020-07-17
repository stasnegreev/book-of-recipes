import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IngredientModel } from '../../../shared/models/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IngredientModel[]) { }

  public saveData() {

    const json = JSON.stringify(this.data);
    console.log(json);
    const text = this.formattingText(this.data);
    // there is using new JS method 'share' in navigator object
    // @ts-ignore
    if (navigator.share) {
      // there is using new JS method 'share' in navigator object
      // @ts-ignore
      navigator.share({title: 'Example Page', text: text.toString()});
    }
  }

  private formattingText(data: IngredientModel[]): string {
    let text = 'Необходимые продукты:' + '\n';
    data.forEach((ingredient: IngredientModel) => {
      text = text + '\u0009' + ingredient.name + ' - ' + ingredient.amount + ', ' + ingredient.unit + '\n';
    });
    console.log('text', text);
    return text;
  }
}
