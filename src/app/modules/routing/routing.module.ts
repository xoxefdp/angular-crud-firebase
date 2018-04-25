import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserAddComponent } from './../../components/user-add/user-add.component';
import { UserDetailComponent } from './../../components/user-detail/user-detail.component';
import { UserListComponent } from './../../components/user-list/user-list.component';


export const RoutesPath: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'add', component: UserAddComponent },
  { path: 'detail', component: UserDetailComponent },
  { path: 'list', component: UserListComponent },
  { path: '**', redirectTo: 'add', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(RoutesPath, { useHash: false })
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
