import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuario } from '../../models/usuario.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuario: Usuario;
  token: string;
  constructor(
    public http: HttpClient,
    private router: Router
  ) {
    this.cargarStorage();
   }

  loginGoogle( token: string) {
    console.log(token);
    const url = URL_SERVICIOS + '/login/google';
    return this.http.post(url, {token})
    .pipe(map( (resp: any) => {
      this.guardarStorage(resp.id, resp.token, resp.usuario);
      return true;
    }));
  }

  guardarStorage( id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
   }
   estaLogeado() {
    return (this.token.length > 5) ? true : false;
 }

 cargarStorage() {
  if (localStorage.getItem('token')) {
    this.token = localStorage.getItem('token');
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  } else {
    this.token = '';
    this.usuario = null;
  }
}
logOut() {
  this.usuario = null;
  this.token = '';
  localStorage.removeItem('token');
  localStorage.removeItem('usuario');
  this.router.navigate(['/login']);
}

  login(usuario: Usuario, recordar: boolean = false) {
    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }
    const url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
    .pipe(map( (resp: any ) => {
      this.guardarStorage(resp.id, resp.token, resp.usuario);
      return true;
    }));
  }

  crearUsuario( usuario: Usuario ) {
    const url = URL_SERVICIOS + '/usuario';
    return this.http.post(url, usuario)
    .pipe(map( (resp: any ) => {
      Swal.fire('Usuario creado', usuario.email, 'success');
      return resp.usuario;
    }));
  }

  actualizarUsuario( usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario/' + usuario.id;
    url += '?token=' + this.token;

    return this.http.put(url, usuario)
    .pipe(map( (resp: any ) => {

      // this.usuario = resp.usuario;
      if (usuario.id === this.usuario.id ) {
        const usuarioDB: Usuario = resp.usuario;
        this.guardarStorage(usuarioDB.id, this.token, usuarioDB);
      }

      // swal('Usuario actualizado', usuario.nombre, 'success');
      return true;
  }));
 }

 cargarUsuarios( desde: number = 0 ) {
  const url = URL_SERVICIOS + '/usuario?desde=' + desde;

  return this.http.get(url);
}

buscarUsuarios( termino: string) {
 const url = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + termino;
 return this.http.get(url)
 .pipe(map( (resp: any ) => resp.usuarios));

}

borrarUsuario( id: string ) {
  let url = URL_SERVICIOS + '/usuario/' + id;
  url += '?token=' + this.token;
  return this.http.delete(url)
     .pipe(map( (resp: any ) => {
      // swal('Usuario Borrado', 'El usuario ha sido eliminado correctamente', 'success');
      return true;
  }));
}
}
