import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserEditInfoComponent} from './components/user-edit-info/user-edit-info.component';
import {UserOrdersComponent} from './components/user-orders/user-orders.component';
import {UsersComponent} from './users.component';
import {UsersRouting} from './users.routing';
import {SharedAppModule} from '../shared/shared-app.module';

@NgModule({
  imports: [
    CommonModule, UsersRouting, SharedAppModule
  ],
  declarations: [UsersComponent, UserDetailsComponent, UserEditInfoComponent, UserOrdersComponent]
})
export class UsersModule { }


