import {UserRole} from './user-role.enum';

interface IUserModel {
  username: string;
  password: string;
  role: UserRole;
}

export class UserModel
  implements IUserModel {
  username: string;
  password: string;
  role: UserRole;


  constructor
  (username: string,
   password: string,
   role: UserRole) {
    this.username = username;
    this.password = password;
    this.role = role;
  }
}


