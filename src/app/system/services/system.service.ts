import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RecipeModel } from '../../shared/models/recipe.model';

@Injectable()

export class SystemService {
  constructor(public firestore: AngularFirestore) {}

  getRecipesListsByType(type: string): Observable<RecipeModel[]> {
    // @ts-ignore
    // Вопрос. Почему ругается на возвращаемый тип. Как сказать что с  сервера придет именно этот тип?
    return this.firestore.collection('recipes', ref => ref.where('type', '==', type)).valueChanges();
  }
}
