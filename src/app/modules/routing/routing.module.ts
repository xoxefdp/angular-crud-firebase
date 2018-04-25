import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserAddComponent } from './../../components/pages/user-add/user-add.component';
import { UserListComponent } from './../../components/pages/user-list/user-list.component';


export const RoutesPath: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'add', component: UserAddComponent },
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
