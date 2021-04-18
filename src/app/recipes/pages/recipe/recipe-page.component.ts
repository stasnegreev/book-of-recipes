import { Component, OnInit } from '@angular/core';
import { exhaustMap, switchMap, take } from 'rxjs/operators';
import { RecipeService } from '../../../shared/services/recipe.service.ts/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeModel } from '../../../shared/models/recipe.model';
import { RecipeTypesNames } from '../../../shared/constans/recipe-types-names';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralGroupsNames } from '../../../shared/constans/general-groups-names';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {
  public recipe: RecipeModel;
  public backgroundImage = 'none';
  public isImageLoading = true;
  public recipeID = '';
  public isLoading: false;
  public form: FormGroup;
  public generalGroupsNames = GeneralGroupsNames;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.subscribeRecipe();
  }

  private subscribeRecipe(): void {
    this.route.params.pipe(
      switchMap(params => {
        this.recipeID = params.id || '';
        return this.recipeService.getRecipeByID(this.recipeID);
      })
    ).subscribe((recipe: RecipeModel) => {
      this.recipe = recipe;
      this.createForm();
      this.subscribeToForm();
      this.subscribeRecipeImageUrl();
    });
  }

  public subscribeRecipeImageUrl() {
    let recipeImageUrl = '';
    this.recipeService.getRecipeImage(this.recipeID).pipe(take(1))
      .subscribe(
        (resp) => {
          recipeImageUrl = `url(\"${resp}\")`;
          this.backgroundImage = recipeImageUrl;
          this.isImageLoading = false;
        },
        () => {
          switch (this.recipe.type) {
            case RecipeTypesNames.BREAKFAST:
              recipeImageUrl = `url(\"/assets/image/breakfast-stub.jpg\")`;
              break;
            case RecipeTypesNames.LUNCH:
              recipeImageUrl = `url(\"/assets/image/lunch-stub.jpg\")`;
              break;
            case RecipeTypesNames.DINNER:
              recipeImageUrl = `url(\"/assets/image/dinner-stub.jpg\")`;
              break;
            case RecipeTypesNames.SNACKS:
              recipeImageUrl = `url(\"/assets/image/snacks-stub.jpg\")`;
              break;
          }
          this.backgroundImage = recipeImageUrl;
          this.isImageLoading = false;
        }
      );
  }

  private createForm() {
    this.form = this.fb.group({
      rating: [this.recipe.rating],
    });
  }

  private subscribeToForm() {
    this.form.get('rating').valueChanges.pipe(
      exhaustMap((value) => this.recipeService.updateRecipeField(this.recipe.id, { rating: value }))
    ).subscribe(
      (value) => console.log(value),
      () => this.snackBar.open('Не удалось сохронить', 'Закрыть'),
    );
  }

  public onClickFavorite() {
    const groups = new Set(this.recipe.groups);
    if (groups.has(GeneralGroupsNames.Favorites)) {
      groups.delete(GeneralGroupsNames.Favorites);
    } else {
      groups.add(GeneralGroupsNames.Favorites);
    }
    this.recipeService.updateRecipeField(this.recipe.id, { groups: Array.from(groups) }).then(
      () => this.recipe.groups = Array.from(groups),
      () => this.snackBar.open('Не удалось сохронить', 'Закрыть'),
    );
  }
}
