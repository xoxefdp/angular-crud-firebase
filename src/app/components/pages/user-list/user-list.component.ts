import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<User>;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        id: '5ae0ddda32666128e62eb99a',
        first: 'Ila',
        last: 'Weaver'
      },
      {
        id: '5ae0dddaeaa816688c275727',
        first: 'Dorothea',
        last: 'Horne'
      },
      {
        id: '5ae0ddda53a1b8f234c8eca2',
        first: 'Diaz',
        last: 'Blair'
      },
      {
        id: '5ae0dddad0124506db833f55',
        first: 'Maxine',
        last: 'Randolph'
      },
      {
        id: '5ae0ddda858698a707a56b04',
        first: 'Teresa',
        last: 'Fry'
      },
      {
        id: '5ae0dddaa3a20cd284a2a674',
        first: 'Hazel',
        last: 'Massey'
      },
      {
        id: '5ae0dddafae2ea5d84255e2d',
        first: 'Crane',
        last: 'Michael'
      },
      {
        id: '5ae0ddda8c51bccdb6d11332',
        first: 'Mindy',
        last: 'Hewitt'
      }
    ];
  }

}
