import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../../services/articulos/articulos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.css']
})
export class BlogAdminComponent implements OnInit {
  blogs = [];
  ultimo = [];
  ultimoActivo: any;
  p = 0;
  collection = [];
  constructor(public artService: ArticulosService) {}



  ngOnInit() {
    this.artService.getTodos()
    .subscribe(resp => {
      this.blogs = resp;
      console.log(this.blogs);
    });
  }

  eliminarArticulo( id) {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Está apunto de borrar este articulo',
      type: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    })
    .then((borrar) => {
      if (borrar) {
        if (borrar.value) {
          this.artService.eliminarArticulo(id)
          .subscribe((resp: any) => {
            if (resp.ok) {
              Swal.fire('Correcto!', 'El artículo se ha eliminado de manera correcta', 'success');
              this.artService.getTodos().subscribe(blog => {
                this.blogs = blog;
              });
            }
          });
        }
      }
    });
  }

  change(evento) {
    this.p = evento;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
