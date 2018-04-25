import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

import { RoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';
import { UserAddComponent } from './components/pages/user-add/user-add.component';
import { UserListComponent } from './components/pages/user-list/user-list.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
