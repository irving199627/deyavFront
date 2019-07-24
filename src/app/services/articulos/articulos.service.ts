import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  expAncla = /<a href="(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?">(.*)<\/a>/g;
  totalConteo = 0;
  blogs = [];
  ultimo = [];
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
    'X-Random-Shit': '123123123'
};
  constructor(
    public http: HttpClient,
    private router: Router
  ) {

  }

  getUltimoArticulos() {
    const url = URL_SERVICIOS + '/blog/1/ultimo';
    return this.http.get(url);
  }

  getTodos() {
    const urlGet = URL_SERVICIOS + '/blog';
    return this.http.get(urlGet)
    .pipe(map((resp: any) => {
      this.blogs = this.limpiarHTML(resp.blogs);
      return this.blogs;
    }));
  }

  getArticulos() {
    // tslint:disable-next-line:no-shadowed-variable
    const urlGet = URL_SERVICIOS + '/blog';
    return this.http.get(urlGet)
    .pipe(map((resp: any) => {
      console.log(resp);
      this.ultimo = resp.blogs;
      // resp.articulos.pop();
      // return resp.articulos;


      this.blogs = this.limpiarHTML(resp.blogs);
      this.blogs.shift();
      return this.blogs;
    }));
  }

  eliminarArticulo( id: string) {
    const url = URL_SERVICIOS + '/blog/' + id;

    return this.http.delete(url);
  }

  subirArchivo( archivo, titulo, contenido, autor) {
      const url = URL_SERVICIOS + `/blog`;
      return this.http.post(url, {
        img: archivo,
        contenido,
        titulo,
        autor
      });
  }

  actualizarArticulo(tipo, body, id) {
    const url = `${URL_SERVICIOS}/${tipo}/${id}`;
    return this.http.put(url, body);
  }

  // crearArticulo(body) {
  //   let url2 = URL_SERVICIOS;
  //   url2 += '/articulo/blog/';
  //   return this.http.post(url2, body)
  //   .pipe(map((resp) => {
  //     console.log(resp);
  //   }));
  // }

  // subirArchivo( archivo: File, tipo: string, titulo, contenido) {
  //   return new Promise( (resolve, reject) => {
  //     const formData = new FormData();
  //     const xhr = new XMLHttpRequest();
  //     formData.append('imagen', archivo, archivo.name);
  //     formData.append('titulo', titulo);
  //     formData.append('contenido', contenido);
  //     xhr.onreadystatechange = () => {
  //       if ( xhr.readyState === 4 ) {
  //         console.log(xhr.status);
  //         if ( xhr.status === 200 || xhr.status === 201 ) {
  //           console.log('imagen subida');
  //           // Swal.fire('Correcto!', 'El artículo se ha creado de manera correcta', 'success');
  //           Swal.fire({
  //             title: 'Correcto',
  //             text: 'El artículo se ha creado de manera correcta',
  //             type: 'success',
  //             confirmButtonColor: '#3085d6',
  //             cancelButtonColor: '#d33',
  //             showConfirmButton: true,
  //             confirmButtonText: 'Ok!'
  //           })
  //           .then((crear) => {
  //             if (crear) {
  //               location.reload();
  //             }
  //           });
  //           resolve( JSON.parse( xhr.response ) );
  //         } else {
  //           console.log('Falló la subida');
  //           reject( xhr.response );
  //         }
  //       }
  //     };

  //     // let url = URL_SERVICIOS + '/upload/' + tipo + '/' + id;
  //     let url2 = URL_SERVICIOS;
  //     url2 += '/articulo/' + tipo;

  //     xhr.open('POST', url2, true);
  //     xhr.send( formData );
  //   });
  // }

  getById(id: string) {
    const urlId = URL_SERVICIOS + '/blog/' + id;
    return this.http.get(urlId)
    .pipe(map( (resp) => {
      return resp;
    }));
  }










  limpiarHTML(texto) {
      this.blogs = [];
      const txt = texto;
      console.log(txt);
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < txt.length; index++) {
        const element = txt[index];
        if (element.activo) {
          element.contenido = element.contenido.toString().replace(/&nbsp;/g, '');
          element.contenido = element.contenido.toString().replace(this.expAncla, '');
          element.contenido = element.contenido.toString().replace(/<br \/>/g, '');
          element.contenido = element.contenido.toString().replace(/<p>/g, ''); // <p>
          element.contenido = element.contenido.toString().replace(/<\/p>/g, ''); // </p>
          element.contenido = element.contenido.toString().replace(/<strong>/g, ''); // <strong>
          element.contenido = element.contenido.toString().replace(/<\/strong>/g, ''); // </strong>
          element.contenido = element.contenido.toString().replace(/<em>/g, ''); // <em>
          element.contenido = element.contenido.toString().replace(/<\/em>/g, ''); // </em>
          element.contenido = element.contenido.toString().replace(/<u>/g, ''); // <u>
          element.contenido = element.contenido.toString().replace(/<\/u>/g, ''); // </u>
          element.contenido = element.contenido.toString().replace(/<s>/g, ''); // <s>
          element.contenido = element.contenido.toString().replace(/<\/s>/g, ''); // </s>
          element.contenido = element.contenido.toString().replace(/<sub>/g, ''); // <sub>
          element.contenido = element.contenido.toString().replace(/<\/sub>/g, ''); // </sub>
          element.contenido = element.contenido.toString().replace(/<sup>/g, ''); // <sup>
          element.contenido = element.contenido.toString().replace(/<\/sup>/g, ''); // </sup>
          this.blogs.push(element);
        }

      }
      return this.blogs;
  }
}
