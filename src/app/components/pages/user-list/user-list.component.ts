import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public usersObservable: Observable<User[]>;
  public users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.usersObservable = this.userService.getSnapshot();
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id);
  }

}
