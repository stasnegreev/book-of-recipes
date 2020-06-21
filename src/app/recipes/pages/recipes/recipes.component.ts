import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeModel } from '../../../shared/models/recipe.model';
import { switchMap } from 'rxjs/operators';
import { RecipeService } from '../../../shared/services/recipe.service.ts/recipe.service';
import { RecipeFields } from '../../../shared/constans/reccipe-fields';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent implements OnInit {

  public type: string;
  public recipes$: Observable<RecipeModel[]>;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscribeRecipes();
  }

  private subscribeRecipes(): void {
    this.recipes$ = this.route.params.pipe(
      switchMap(params => {
        this.type = params[RecipeFields.TYPE] || '';
        return this.recipeService.getRecipes(RecipeFields.TYPE, this.type);
      })
    );
  }
}
