import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './components/login/login.component';
import {SharedAppModule} from '../shared/shared-app.module';
import {AuthRouting} from './auth.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, SharedAppModule, AuthRouting, ReactiveFormsModule, FormsModule
  ],
  declarations: [AuthComponent, LoginComponent]
})
export class AuthModule {
}
