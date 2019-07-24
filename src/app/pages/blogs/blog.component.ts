import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../services/articulos/articulos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  id: string;
  articulo: any = {
    contenido: ''
  };
  constructor(
    public route: ActivatedRoute,
    public artService: ArticulosService
    ) {
      this.route.params.subscribe((id: any) => {
        this.id = id.id;
      });
      document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  ngOnInit() {
    this.artService.getById(this.id)
        .subscribe((articulo: any) => {
          console.log(articulo);
          this.articulo = articulo.blogBD;
        });
  }

  eliminarArticulo() {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Está apunto de borrar este articulo',
      type: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    })
    .then((borrar) => {
      if (borrar) {
        this.artService.eliminarArticulo(this.id)
        .subscribe();
      }
    });
  }

}
interface Blog {
  tipo: string;
  titulo: string;
  contenido: string;
  contador: number;
  activo: boolean;
  _id: string;
}
