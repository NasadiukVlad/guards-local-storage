import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OrderDataComponent} from './orders/components/order-data/order-data.component';
import {AboutComponent} from './core/components/about/about.component';
import {HomeComponent} from './core/components/home/home.component';
import {AuthGuard} from './core/guards/auth.guard';
import {AdminGuard} from './core/guards/admin.guard';
import {AwayGuard} from './core/guards/away.guard';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about', component: AboutComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AwayGuard]
  },
  {
    path: 'orders', loadChildren: 'app/orders/orders.module#OrdersModule',
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'user/:id', loadChildren: 'app/users/users.module#UsersModule',
    canActivate: [AuthGuard]
  },
  {path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}


