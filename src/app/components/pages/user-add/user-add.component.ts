import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  first: string;
  last: string;

  constructor(private userService: UserService, private router: Router) { }

  // lifecycle event called after component builds
  // checks if binded vars are initialized to clear them
  ngOnInit() {
    if (this.first !== '' || this.last !== '') {
      this.resetUser();
    }
  }

  // clear binded vars
  resetUser() {
    this.first = '';
    this.last = '';
  }

  // calls user service to create a user
  createUser(user: User) {
    this.userService.createUser(user);
  }

  // method to execute on event ngSubmit
  onSubmit() {
    if (this.first !== '' && this.last !== '' ) {
      const user = {
        first: this.first,
        last: this.last
      };

      this.createUser(user);
      this.router.navigate(['/list']);
    }
  }
}
