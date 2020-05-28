import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FbCollections } from '../../shared/constans/fb-collections';

@Injectable()

export class RecipesService {
  constructor(public firestore: AngularFirestore) {}

  getUsersLists(): Observable<any[]> {
    return this.firestore.collection(FbCollections.USERS).valueChanges();
  }
}
