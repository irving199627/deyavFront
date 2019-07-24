import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  cursos;
  constructor(
    private http: HttpClient
  ) {
  }

  getCursos() {
    const url = URL_SERVICIOS + '/curso';
    return this.http.get(url);
  }

  getPorCategoria(categoria: string) {
    const url = `${ URL_SERVICIOS }/curso/${ categoria }`;
    return this.http.get(url)
    .subscribe(resp => console.log(resp));
  }

  getPorId( id: string) {
    const url = `${ URL_SERVICIOS }/curso/1/${ id }`;
    return this.http.get(url);
  }

  createCurso( body ) {
    const url = `${ URL_SERVICIOS }/curso`;
    return this.http.post(url, body);
    // .subscribe(resp => console.log(resp));
  }

  updateCurso( id: string, body) {
    const url = `${ URL_SERVICIOS }/curso/${ id }`;
    this.http.put(url, body)
    .subscribe(resp => console.log(resp));
  }

  borrarCurso( id: string ) {
    const url = `${ URL_SERVICIOS }/curso/${ id }`;
    return this.http.delete(url)
    .pipe(map((resp) => {
      return resp;
    }));
  }
}
