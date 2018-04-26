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

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { RoutingModule } from './modules/routing/routing.module';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { UserAddComponent } from './components/pages/user-add/user-add.component';
import { UserListComponent } from './components/pages/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserAddComponent,
    UserListComponent
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
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AngularFirestore,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
