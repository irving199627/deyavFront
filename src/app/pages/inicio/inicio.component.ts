import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos/articulos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  urlImg = '/assets/img/servicios/iconos';
  ckeConfig: any;
  mycontent: string;
  log  = '';
  imagenSubir: File;
  imagenTemp: string;
  constructor( public artService: ArticulosService) { this.mycontent = ``; }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      forcePasteAsPlainText: true,
      toolbarCanCollapse: true,
      contentsLanguage: 'es',
      entities_latin: true,
      defaultLanguage: 'es',
      entities: false,
      toolbarGroups: [
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    // { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
    { name: 'links' },
    '/',
    // { name: 'styles' },
    { name: 'tools' },
    { name: 'others' },
      ],
      uiColor: '#AADC6E',
      width: '100%'
    };
  }

  onChange($event: any): void {
    // this.log += new Date() + "<br />";
    // console.log(this.mycontent);
  }
  crearBlog(titulo) {
    this.artService.subirArchivo(this.imagenSubir, 'blog', titulo, this.mycontent)
    .then(resp => {
      console.log(resp);
    })
    .catch(err => {
      console.log('Error en la carga...');
    });
  }

  seleccionImagen( archivo: File ) {
    console.log(archivo);
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    if (archivo.type.indexOf('image') < 0 ) {
      this.imagenSubir = null;
      Swal.fire('Solo imagenes', 'El archivo seleccionado no es una imagen', 'error');
      console.log('Solo imagenes', 'El archivo seleccionado no es una imagen', 'error');
      return;
    }
    this.imagenSubir = archivo;

    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result.toString();

  }

}
