import {Component, EventEmitter, Input, Output} from '@angular/core';
import { RecipeModel } from '../../shared/models/recipe.model';
import { RecipeFields } from '../../shared/constans/reccipe-fields';
import { RecipeService } from '../../shared/services/recipe.service.ts/recipe.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-result-view',
  templateUrl: './search-result-view.component.html',
  styleUrls: ['./search-result-view.component.scss']
})
export class SearchResultViewComponent {

  @Input() set queryValue(value) {
    this.isActive = !!value;
    if (value) {
      this.subscribeRecipes(value);
    }
  }

  @Output()
  public activeOff = new EventEmitter<void>();

  public results$: Observable<RecipeModel[]>;
  public isActive = false;

  constructor(private recipeService: RecipeService) { }

  private subscribeRecipes(value): void {
    this.results$ = this.recipeService.getRecipesByName(RecipeFields.NAME, value).pipe(
      map((data) => {
        return data;
      })
    );
  }

  public reset() {
    this.isActive = false;
    this.activeOff.emit();
  }
}
