import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrdersComponent} from './orders.component';
import {OrderDataComponent} from './components/order-data/order-data.component';
import {OrdersRouting} from './orders.routing';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import {SharedAppModule} from '../shared/shared-app.module';

@NgModule({
  imports: [
    CommonModule, OrdersRouting, SharedAppModule
  ],
  declarations: [OrdersComponent, OrderDataComponent, OrdersListComponent]
})
export class OrdersModule {
}
