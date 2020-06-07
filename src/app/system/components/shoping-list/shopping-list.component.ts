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

}
