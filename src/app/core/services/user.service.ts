import {Injectable} from '@angular/core';
import {UserModel} from '../../auth/models/user.model';
import {UserRole} from '../../auth/models/user-role.enum';

@Injectable()
export class UserService {

  private usersCollection: UserModel[] = [];
  private user: any;
  currentUser: UserModel;

  constructor() {
    this.usersCollection.push(new UserModel('client', '123', UserRole.CLIENT));
    this.usersCollection.push(new UserModel('admin', '321', UserRole.ADMIN));
  }

  getUser() {
    this.user = localStorage.getItem('currentUser');
    if (!this.user) {
      return null;
    }
    this.currentUser = JSON.parse(this.user);
    return this.currentUser;
  }

  getAllUsers() {
    return this.usersCollection;
  }

  getUserRoles(): UserRole {
    this.getUser();

    if (this.currentUser != null) {
      return this.currentUser.role;
    } else {
      return null;
    }
  }
}

