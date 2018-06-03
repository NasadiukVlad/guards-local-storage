import {Component} from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {Router} from '@angular/router';
import {UserRole} from './auth/models/user-role.enum';
import {UserService} from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userRole: UserRole;
  userRoleClient = UserRole.CLIENT;
  public  isAuthorized = false;


  constructor(public router: Router,
              private authService: AuthService,
              private userService: UserService) {

    this.checkEnteredUserExistingLocalStorage();

    this.authService.loginEventEmitter.subscribe((authStatus: boolean) => {
      this.isAuthorized = authStatus;

      if (authStatus) {
        this.userRole = this.userService.getUserRoles();
      }
    });
  }

  private checkEnteredUserExistingLocalStorage() {

    if (this.userService.getUserRoles() != null) {
      this.userRole = this.userService.getUserRoles();
      this.isAuthorized = true;

      if (this.userRole === UserRole.ADMIN) {
        this.router.navigate(['orders']);
      } else {
        this.router.navigate(['about']);
      }
    }
  }

  onLogout() {
    this.authService.logout();
  }
}


