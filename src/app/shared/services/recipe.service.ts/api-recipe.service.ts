import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { RecipeModel } from '../../models/recipe.model';
import { FbCollections } from '../../constans/fb-collections';
import { first, map, take } from 'rxjs/operators';

export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class ApiRecipeService {

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
  ) { }

  // API FIRE STORAGE
  public uploadFile(filePath: string, file: File, fileType: string) {
    const ref = this.storage.ref(fileType + '/' + filePath);
    return ref.put(file);
  }

  public getFileUrl(fileType: string, filePath: string ) {
    const ref = this.storage.ref(fileType + '/' + filePath);
    return ref.getDownloadURL().pipe(take(1));
  }

  // API CLOUD FIRESTORE
  public apiCreateNewRecipe(data: RecipeModel) {
    data.ingredients = { ...data.ingredients };
    return this.firestore.collection(FbCollections.RECIPES).add({...data});
  }

  public apiGetRecipes(filterType: string, filterValue: string) {
    return this.firestore.collection(
      FbCollections.RECIPES, ref => ref.where(filterType, '==', filterValue)
    ).valueChanges({ idField: 'id' });
  }

  public apiGetRecipesByName(filterType: string, filterValue: string) {
    const charts = filterValue.slice(0, 3);
    return this.firestore.collection(
      FbCollections.RECIPES, ref => ref.where('nameForSearch', 'array-contains', charts)
    ).valueChanges({ idField: 'id' }).pipe(
      first()
    );
  }

  public apiGetRecipeByID(recipeID: string) {
    return this.firestore.doc<Item>(FbCollections.RECIPES + '/' +  recipeID).valueChanges().pipe(
      map((response: RecipeModel) => {
        if (response.ingredients) {
          response.ingredients = Object.values(response.ingredients);
        }
        if (response) {
          response.id = recipeID;
        }
        return response;
      }),
      first()
    );
  }

  public apiUpdateRecipe(data: RecipeModel, recipeID: string) {
    data.ingredients = { ...data.ingredients };
    return this.firestore.doc<Item>(FbCollections.RECIPES + '/' +  recipeID).update({...data});
  }

  public apiDeleteRecipe(recipeID: string) {
    return this.firestore.doc<Item>(FbCollections.RECIPES + '/' +  recipeID).delete();
  }
}
