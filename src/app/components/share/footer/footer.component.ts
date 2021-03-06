import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  url = 'assets/img/barra de abajo.png';
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  contactar( nombre: string, email: string, mensaje: string ) {
    console.log(nombre, email, mensaje);
    const url = URL_SERVICIOS + '/email';
    this.http.post(url, {
      contenido: mensaje,
      titulo: nombre,
      email
    }).subscribe(resp => {
      console.log(resp);
    });
  }

  suscribirse() {
    Swal.fire({
      title: 'Ingrese su correo electrónico para suscribirse al boletin',
      input: 'email',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Suscribirme!',
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Suscrito',
        });
      }
    });
  }
}
