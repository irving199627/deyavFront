import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CargarImagenesService } from '../../../services/cargar-imagenes.service';
import { ArticulosService } from '../../../services/articulos/articulos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/interfaces/blog';
import { SubirImagenService } from '../../../services/subirImagen/subir-imagen.service';
declare const $: any;
@Component({
  selector: 'app-blog-admin-nuevo',
  templateUrl: './blog-admin-nuevo.component.html',
  styleUrls: ['./blog-admin-nuevo.component.css']
})
export class BlogAdminNuevoComponent implements OnInit {
  nuevo: string;
  guardando = false;
  titulo: string;
  autor: string;
  ckeConfig: any;
  articuloEditar: Blog = {
    titulo: '',
    autor: '',
    img: '',
    contenido: ''
  };
  nombreImagen;
  mycontent: string;

  constructor(
    public cargaImagenesS: CargarImagenesService,
    public artService: ArticulosService,
    public subirImagenService: SubirImagenService,
    public route: ActivatedRoute,
    private router: Router
    ) { this.mycontent = ``;
        this.route.params.subscribe(params => {
          this.nuevo = params.action;
        });
        document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

//   fileChangeEvent(event: any): void {
//   this.subirImagenService.fileChangeEvent(event);
// }
// imageCropped(event: ImageCroppedEvent) {
//   this.subirImagenService.imageCropped(event);
// }

  ngOnInit() {
    if (this.nuevo !== 'nuevo') {
      this.artService.getById(this.nuevo)
      .subscribe((resp: any) => {
        console.log(resp);
        this.articuloEditar = resp.blogBD;
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
    this.guardando = true;
    this.artService.subirArchivo(this.subirImagenService.imagen64, this.titulo, this.mycontent, this.autor)
    .subscribe( (resp: any) => {
      if (resp.ok) {
        Swal.fire({
          title: 'Blog Creado',
          text: 'El blog ha sido creado con éxito',
          type: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok!'
        }).then((result) => {
          if (result.value) {
            this.guardando = false;
            this.subirImagenService.croppedImage = null;
            this.router.navigate(['/admin/blog']);
          }
        });
      }
    });
  }


  actualizarBlog(forma) {
    if (this.subirImagenService.imagen64 !== undefined) {
      const datosNuevos = {
        contenido: forma.contenido,
        img: this.subirImagenService.imagen64,
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
}
