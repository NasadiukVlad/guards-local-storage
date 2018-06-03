import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './components/login/login.component';

const AUTH_ROUTES: Routes = [
  {
    path: '', component: AuthComponent, children: [
    {path: '', redirectTo: 'login'},
    {path: 'login', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES)],
  exports: [RouterModule]
})
export class AuthRouting {
}




