import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  first: string;
  last: string;

  constructor(private router: Router) {
    this.resetUser();
  }

  ngOnInit() {
    if (this.first !== '' || this.last !== '') {
      this.resetUser();
    }
  }

  resetUser() {
    this.first = '';
    this.last = '';
  }

  onSubmit() {
    if (this.first !== '' && this.last !== '' ) {
      this.router.navigate(['/list']);
    }
  }
}
