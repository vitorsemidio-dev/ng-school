import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.email, Validators.required,
    ]),
    senha: new FormControl('', [Validators.minLength(3)]),
  });

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  entrar() {
    console.log('entrar');
    this.authService.fazerLogin(this.loginForm.value);
  }

}
