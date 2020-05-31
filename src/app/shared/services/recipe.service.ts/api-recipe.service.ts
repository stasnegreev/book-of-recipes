import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { RecipeModel } from '../../models/recipe.model';
import { FbCollections } from '../../constans/fb-collections';
import { take } from 'rxjs/operators';

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
    data.ingredients.map((ingredient) => {
        return Object.assign({}, ingredient);
    });
    data.ingredients = Object.assign({}, data.ingredients);
    data = Object.assign({}, data);
    return this.firestore.collection(FbCollections.RECIPES).add({...data});
  }

  public apiGetRecipes(filterType: string, filterValue: string) {
    return this.firestore.collection(
      FbCollections.RECIPES, ref => ref.where(filterType, '==', filterValue)
    ).valueChanges({ idField: 'id' });
  }
}
