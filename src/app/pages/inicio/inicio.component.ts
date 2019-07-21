import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor( ) { }



  ngOnInit() {

  }


  // seleccionImagen( archivo: File ) {
  //   console.log(archivo);
  //   if (!archivo) {
  //     this.imagenSubir = null;
  //     return;
  //   }

  //   if (archivo.type.indexOf('image') < 0 ) {
  //     this.imagenSubir = null;
  //     Swal.fire('Solo imagenes', 'El archivo seleccionado no es una imagen', 'error');
  //     console.log('Solo imagenes', 'El archivo seleccionado no es una imagen', 'error');
  //     return;
  //   }
  //   this.imagenSubir = archivo;

  //   const reader = new FileReader();
  //   const urlImagenTemp = reader.readAsDataURL(archivo);

  //   reader.onloadend = () => this.imagenTemp = reader.result.toString();

  // }

}
