import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AdminPageService } from '../../services/admin-page.service';
import { RecipeModel } from '../../../shared/models/recipe.model';
import { IngredientModel } from '../../../shared/models/ingredient.model';
import { RECIPE_TYPES } from '../../../shared/constans/recipe-types';

@Component({
  selector: 'app-new-recipe-form',
  templateUrl: './new-recipe-form.component.html',
  styleUrls: ['./new-recipe-form.component.scss'],

})

export class NewRecipeFormComponent implements OnInit {
  public recipeTypes = RECIPE_TYPES;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private adminPageService: AdminPageService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      instruction: [''],
      name: [''],
      rating: [''],
      time: [''],
      type: [''],
      ingredients: new FormArray([]),
    });
  }

  public onSubmit() {
    const ingListToAdd: string[] = [];
    const ingredientsToAdd: IngredientModel[] = [];
    this.form.get('ingredients').value.forEach((ingredient) => {
      ingredientsToAdd.push(Object.assign({}, new IngredientModel(ingredient)));
      ingListToAdd.push(ingredient.name);
    });
    const recipeToAdd = new RecipeModel(Object.assign({}, this.form.value, { ingList: ingListToAdd, ingredients: ingredientsToAdd }));
    this.adminPageService.addNewRecipe(recipeToAdd);
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
}
