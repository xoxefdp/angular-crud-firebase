import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { User } from '../models/user';


@Injectable()
export class UserService {

  usersCollection: AngularFirestoreCollection<User>;
  userDocument: AngularFirestoreDocument<Node>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('users');
  }

  getData(): Observable<User[]> {
    return this.usersCollection.valueChanges();
  }

  getSnapshot(): Observable<User[]> {
    return this.usersCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as User;
        return { id: a.payload.doc.id, first: data.first, last: data.last };
      });
    });
  }

  getUser(id: string) {
    return this.afs.doc<User>(`users/${id}`);
  }

  createUser(data: any) {
    const user = {
      first: data.first,
      last: data.last
    };
    return this.usersCollection.add(user);
  }

  deleteUser(id: string) {
    return this.getUser(id).delete();
  }

}
