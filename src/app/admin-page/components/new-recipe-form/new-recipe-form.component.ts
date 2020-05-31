import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../../shared/services/recipe.service.ts/recipe.service';
import { RECIPE_TYPES } from '../../../shared/constans/recipe-type-options';
import { RATING } from '../../../shared/constans/rating';
import {ValidatorValue} from '../../../shared/constans/validator-value';

@Component({
  selector: 'app-new-recipe-form',
  templateUrl: './new-recipe-form.component.html',
  styleUrls: ['./new-recipe-form.component.scss'],
})
export class NewRecipeFormComponent implements OnInit {
  public recipeTypes = RECIPE_TYPES;
  public ratings = RATING;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      instruction: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.maxLength(ValidatorValue.MAX_LENGTH_INPUT)]],
      rating: [ValidatorValue.MAX_RATING, [Validators.required, Validators.min(0), Validators.max(ValidatorValue.MAX_RATING)]],
      type: ['', [Validators.required]],
      image: [''],
      ingredients: new FormArray([]),
    });
  }

  public onSubmit() {
    if (this.form.valid) {
      this.recipeService.addNewRecipe(this.form);
    }
  }

  public addIngredient() {
    this.ingredients.push(this.fb.group({
      amount: [''],
      name: [''],
      unit: [''],
    }));
  }

  public deleteIngredient(index) {
    this.ingredients.removeAt(index);
  }

  public get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  public stars(rating): any[] {
    return new Array(rating);
  }
}
