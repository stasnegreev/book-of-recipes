import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  constructor(public firestore: AngularFirestore) {}

  getUsersLists(): Observable<any[]> {
    return this.firestore.collection('users').valueChanges();
  }
}
