import {EventEmitter, Injectable} from '@angular/core';
import {UserModel} from '../../auth/models/user.model';
import {UserService} from './user.service';
import {Router} from '@angular/router';
import {UserRole} from '../../auth/models/user-role.enum';

@Injectable()
export class AuthService {

  loginEventEmitter = new EventEmitter<boolean>();

  constructor(private userService: UserService,
              private router: Router) {
  }

  login(username: string, password: string) {

   // this.userService.getAllUsers().find(((user: UserModel) => user.username === username && user.password === password));
   // this.userService.getAllUsers().filter(((user: UserModel) => user.username === username && user.password === password));


    this.userService.getAllUsers().forEach((user: UserModel) => {
        if (user.username === username && user.password === password) {

          localStorage.setItem(
            'currentUser',
            JSON.stringify(user)
          );

          this.loginEventEmitter.emit(true);

          if (user.role === UserRole.CLIENT) {
            this.router.navigate(['about']);
          } else {
            this.router.navigate(['orders']);
          }
        }
      }
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth']);
    this.loginEventEmitter.emit(false);
  }
}

