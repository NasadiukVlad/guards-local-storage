import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {

    this.loginForm =
      this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  onLogin() {
    const username =
      this.loginForm.controls['username'].value;
    const password =
      this.loginForm.controls['password'].value;

   this.authService
     .login(username, password);
  }


  onSubmit() {
    console.log(this.loginForm);
  }

  ngOnInit(): void {
  }

}
