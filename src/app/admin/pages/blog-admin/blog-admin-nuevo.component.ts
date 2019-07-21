import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { CargarImagenesService } from '../../../services/cargar-imagenes.service';
import { ArticulosService } from '../../../services/articulos/articulos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/interfaces/blog';
declare const $: any;
@Component({
  selector: 'app-blog-admin-nuevo',
  templateUrl: './blog-admin-nuevo.component.html',
  styleUrls: ['./blog-admin-nuevo.component.css']
})
export class BlogAdminNuevoComponent implements OnInit {
  nuevo: string;
  titulo: string;
  autor: string;
  urlImg = '/assets/img/servicios/iconos';
  ckeConfig: any;
  articuloEditar: Blog = {
    titulo: '',
    autor: '',
    img: '',
    contenido: ''
  };
  nombreImagen;
  evento = {
    width: 0,
    height: 0
  };
  mycontent: string;
  imagen64;
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(
    public cargaImagenesS: CargarImagenesService,
    public artService: ArticulosService,
    public route: ActivatedRoute,
    private router: Router
    ) { this.mycontent = ``;
        this.route.params.subscribe(params => {
          this.nuevo = params.action;
        });
  }

  fileChangeEvent(event: any): void {
    console.log(event.target.files[0].type);
    if (event) {
      if (!event.target.files[0].type.startsWith('image')) {
        Swal.fire('No es una imagen', 'Solo seleccionar imagenes con las extenciones jpg, jpge, png', 'error');
        $('#imagen')[0].value = '';
        return;
      }
      const extensionesValidas = ['jpg', 'png', 'jpeg'];
      const extensionArchivo = event.target.files[0].type.split('/')[1];
      if (extensionesValidas.indexOf(extensionArchivo) < 0) {
        Swal.fire('Extensión no válida', 'Solo seleccionar imagenes con las extenciones jpg, jpge, png', 'error');
        return;
      }
      this.imageChangedEvent = event;
    }
}
imageCropped(event: ImageCroppedEvent) {
    if (event.file.type.startsWith('image')) {
      this.croppedImage = event.base64;
      const imagen64 = this.croppedImage.toString();
      const imagenbase64 = imagen64.replace('data:image/png;base64,', '');
      this.imagen64 = imagenbase64;
      this.evento = event;
    } else {
      Swal.fire('No es una imagen', 'Solo seleccionar imagenes con las extenciones jpg, jpge, png', 'error');
    }

    // const binaryData = new Buffer(this.croppedImage.replace(/^data:image\/png;base64,/, ''), 'base64').toString('binary');
    // console.log(binaryData);
}

  ngOnInit() {
    if (this.nuevo !== 'nuevo') {
      this.artService.getById(this.nuevo)
      .subscribe((resp: any) => {
        this.articuloEditar = resp.articuloBD;
        this.nombreImagen = this.articuloEditar.img;
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
  crearBlog() {
    // this.cargaImagenesS.cargarImagenesFirebase(this.imagen64, 'blog');
    console.log(this.titulo, this.autor);
    this.artService.subirArchivo(this.imagen64, 'blog', this.titulo, this.mycontent, this.autor)
    .subscribe( resp => {
      console.log(resp);
    });
  }


  actualizarBlog(forma) {
    if (this.imagen64 !== undefined) {
      const datosNuevos = {
        contenido: forma.contenido,
        img: this.imagen64,
        nombreImagen: this.nombreImagen,
        titulo: forma.titulo,
        autor: forma.autor
      };
      this.artService.actualizarArticulo('blog', datosNuevos, this.nuevo)
    .subscribe((resp: any) => {
      if (resp.ok) {
        Swal.fire({
          title: 'Actualizado',
          text: 'El archivo ha sido actualizado con éxito',
          type: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok!'
        }).then((result) => {
          if (result.value) {
            console.log('object');
            this.router.navigate(['/admin/blog']);
          }
        });
      }
    });
    } else {
      const datosNuevos = {
        contenido: forma.contenido,
        titulo: forma.titulo,
        autor: forma.autor
      };
      this.artService.actualizarArticulo('blog', datosNuevos, this.nuevo)
    .subscribe((resp: any) => {
      if (resp.ok) {
        Swal.fire({
          title: 'Actualizado',
          text: 'El archivo ha sido actualizado con éxito',
          type: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok!'
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/admin/blog']);
          }
        });
      }
    });
    }
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
