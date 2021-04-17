import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../../shared/services/recipe.service.ts/recipe.service';
import { RECIPE_TYPES } from '../../../shared/constans/recipe-type-options';
import { RATING } from '../../../shared/constans/rating';
import { ValidatorValue } from '../../../shared/constans/validator-value';
import { RecipeModel } from '../../../shared/models/recipe.model';
import { IngredientModel } from '../../../shared/models/ingredient.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RECIPE_OWNERS } from '../../../shared/constans/recipe-owners-options';
import { RecipeOwnersNames } from '../../../shared/constans/recipe-owners-names';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class RecipeFormComponent implements OnInit {

  @Input() public recipe: RecipeModel;
  @Input() public recipeImageUrl: string;

  public recipeTypes = RECIPE_TYPES;
  public recipeOwners = RECIPE_OWNERS;
  public ratings = RATING;
  public form: FormGroup;
  public isLoading = false;

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.createForm();
    if (this.recipe) {
      this.patchForm();
    }
  }

  private createForm() {
    this.form = this.fb.group({
      instruction: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.maxLength(ValidatorValue.MAX_LENGTH_INPUT)]],
      rating: [ValidatorValue.MAX_RATING, [Validators.required, Validators.min(0), Validators.max(ValidatorValue.MAX_RATING)]],
      type: ['', [Validators.required]],
      owner: [RecipeOwnersNames.MIRONOVA, [Validators.required]],
      image: [''],
      ingredients: new FormArray([]),
    });
  }

  private patchForm() {
    this.form.patchValue({
      instruction: this.recipe.instruction,
      name: this.recipe.name,
      rating: this.recipe.rating,
      type: this.recipe.type,
      owner: this.recipe.owner ? this.recipe.owner : RecipeOwnersNames.TURBO,
    });

    this.recipe.ingredients.forEach((ingredient: IngredientModel) => {
      this.formIngredients.push(this.fb.group({
        amount: ingredient.amount,
        name: ingredient.name,
        unit: ingredient.unit,
      }));
    });
  }

  public onSubmit() {
    if (this.form.valid) {
      this.isLoading = true;
      if (this.recipe) {
        this.recipeService.updateRecipe(this.form, this.recipe.id).then(
            () => {
              this.snackBar.open('Рецепт сохранен', 'Закрыть');
              this.isLoading = false;
            }
        );
      } else {
        this.recipeService.addNewRecipe(this.form).then(
          () => {
            this.createForm();
            this.isLoading = false;
            this.snackBar.open('Рецепт сохранен', 'Закрыть');
          }
        );
      }
    }
  }

  public onDeleteRecipe() {
    this.isLoading = true;
    this.recipeService.deleteRecipe(this.recipe.id).then(
      () => {
        this.isLoading = false;
        this.snackBar.open('Рецепт удалён', 'Закрыть');
        this.router.navigate(['create-recipe']);
      }
    );
  }

  public addIngredient() {
    this.formIngredients.push(this.fb.group({
      amount: [''],
      name: [''],
      unit: [''],
    }));
  }

  public deleteIngredient(index) {
    this.formIngredients.removeAt(index);
  }

  public get formIngredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  public stars(rating): any[] {
    return new Array(rating);
  }
}
