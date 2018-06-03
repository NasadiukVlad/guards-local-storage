import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserRole} from '../../auth/models/user-role.enum';
import {UserService} from '../services/user.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userService.getUserRoles() === UserRole.ADMIN) {
      return true;
    }
    // not access so redirect to login page
    this.router.navigateByUrl('/auth');
    return false;
  }
}

