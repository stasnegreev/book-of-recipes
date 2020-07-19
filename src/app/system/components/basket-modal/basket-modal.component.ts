import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../../../shared/models/recipe.model';
import { BasketService } from '../../../shared/services/basket-service/basket.service';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingListComponent } from '../../../main-layout/components/shoping-list/shopping-list.component';
import { map } from 'rxjs/operators';
import { IngredientModel } from '../../../shared/models/ingredient.model';

@Component({
  selector: 'app-basket-modal',
  templateUrl: './basket-modal.component.html',
  styleUrls: ['./basket-modal.component.scss']
})
export class BasketModalComponent implements OnInit {
  @Input()
  public isShowBasket = true;

  public basketList: RecipeModel[];

  constructor(private basketService: BasketService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.basketService.getBasket().pipe(
      map((basket: {[key: string]: RecipeModel}) => Object.values(basket))
    ).subscribe((basketList) => {
      this.basketList = basketList;
    });
  }

  public deleteRecipe(recipe: RecipeModel): void {
    this.basketService.deleteRecipe(recipe);
  }

  public decreaseCount(recipe): void {
    this.basketService.decreaseCount(recipe);
  }

  public increaseCount(recipe): void {
    this.basketService.increaseCount(recipe);
  }

  public toggleBasket() {
    this.isShowBasket = !this.isShowBasket;
  }

  public showShoppingList(): void {
    const list: IngredientModel[] = this.basketService.getShoppingList();
    this.dialog.open(ShoppingListComponent, {
      data: list,
    });
  }
}
