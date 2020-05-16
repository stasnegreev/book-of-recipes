import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { RecipeModel } from '../../shared/models/recipe.model';

@Injectable()

export class AdminPageService {

  constructor(private firestore: AngularFirestore) {

  }

  public addNewRecipe(recipe: RecipeModel) {
    this.firestore.collection('recipes').add({...recipe});
  }
}

