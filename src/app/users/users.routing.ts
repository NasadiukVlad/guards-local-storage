import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserEditInfoComponent} from './components/user-edit-info/user-edit-info.component';
import {UserOrdersComponent} from './components/user-orders/user-orders.component';
import {NgModule} from '@angular/core';
import {UsersComponent} from './users.component';

const USERS_CHILD_ROUTES: Routes = [
  {
    path: '', component: UsersComponent, children: [
    {path: 'user-detail', component: UserDetailsComponent},
    {path: 'user-edit-info', component: UserEditInfoComponent},
    {path: 'user-orders', component: UserOrdersComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(USERS_CHILD_ROUTES)],
  exports: [RouterModule]
})
export class UsersRouting {
}




