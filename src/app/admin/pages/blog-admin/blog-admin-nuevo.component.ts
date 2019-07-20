import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { CargarImagenesService } from '../../../services/cargar-imagenes.service';
import { ArticulosService } from '../../../services/articulos/articulos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-admin-nuevo',
  templateUrl: './blog-admin-nuevo.component.html',
  styleUrls: ['./blog-admin-nuevo.component.css']
})
export class BlogAdminNuevoComponent implements OnInit {
  nuevo: string;
  urlImg = '/assets/img/servicios/iconos';
  ckeConfig: any;
  articuloEditar;
  evento = {
    width: 0,
    height: 0
  };
  mycontent: string;
  // log  = '';
  // imagenSubir: File;
  // imagenTemp: string;
  imagen64;

  // imageCropper
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(
    public cargaImagenesS: CargarImagenesService,
    public artService: ArticulosService,
    public route: ActivatedRoute,
    ) { this.mycontent = ``;
        this.route.params.subscribe(params => {
          this.nuevo = params.action;
        });
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    const imagen64 = this.croppedImage.toString();
    const imagenbase64 = imagen64.replace('data:image/png;base64,', '');
    this.imagen64 = imagenbase64;
    this.evento = event;
    console.log(event);
    // const binaryData = new Buffer(this.croppedImage.replace(/^data:image\/png;base64,/, ''), 'base64').toString('binary');
    // console.log(binaryData);
}

  ngOnInit() {
    if (this.nuevo !== 'nuevo') {
      this.artService.getById(this.nuevo)
      .subscribe((resp: any) => {
        this.articuloEditar = resp.articuloBD;
        console.log(this.articuloEditar);
      });
    }
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
  crearBlog(titulo, autor) {
    // this.cargaImagenesS.cargarImagenesFirebase(this.imagen64, 'blog');
    this.artService.subirArchivo(this.imagen64, 'blog', titulo, this.mycontent, autor)
    .subscribe( resp => {
      console.log(resp);
    });
  }

  actualizarBlog(forma) {
    console.log(forma);
    this.artService.actualizarArticulo('blog', forma, this.id);
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
