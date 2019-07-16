import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    public http: HttpClient
  ) { }

  loginGoogle( token: string) {
    console.log(token);
    const url = URL_SERVICIOS + '/login/google';
    return this.http.post(url, {token})
    .pipe(map( resp => {
        console.log(resp);
    }));
  }
}
