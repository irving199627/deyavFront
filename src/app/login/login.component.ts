import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../services/usuarios/usuarios.service';

declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  auth2: any;
  constructor(
    public usuarioService: UsuariosService
  ) { }

  ngOnInit() {
    this.googleInit();
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
          client_id: '460571682372-sjedr5d2gh4lkvj8klgj3n19o36adanb.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scoop: 'profile email'
      });

      this.attachSignIn( document.getElementById('btnGoogle'));
    });
  }

  attachSignIn( element ) {
    this.auth2.attachClickHandler( element, {}, (googleUser) => {
      const token = googleUser.getAuthResponse().id_token;
      this.usuarioService.loginGoogle( token )
      .subscribe();
    //   .subscribe( () => window.location.href = '#/dashboard');
    });
  }

  ingresar( forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    console.log(forma);
  }


}
