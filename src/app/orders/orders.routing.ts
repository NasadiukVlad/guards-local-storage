import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OrdersComponent} from './orders.component';
import {OrderDataComponent} from './components/order-data/order-data.component';
import {OrdersListComponent} from './components/orders-list/orders-list.component';

const ORDERS_ROUTES: Routes = [
  {
    path: '', component: OrdersComponent, children: [
    {path: '', redirectTo: 'list'},
    {path: 'list', component: OrdersListComponent},
    {path: 'data/:id', component: OrderDataComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ORDERS_ROUTES)],
  exports: [RouterModule]
})
export class OrdersRouting {
}




