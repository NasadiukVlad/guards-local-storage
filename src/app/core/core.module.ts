import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './guards/auth.guard';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {AdminGuard} from './guards/admin.guard';
import {AwayGuard} from './guards/away.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent, HomeComponent
  ],
  declarations: [AboutComponent, HomeComponent],
  providers: [AuthService, UserService, AuthGuard, AdminGuard, AwayGuard]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}


