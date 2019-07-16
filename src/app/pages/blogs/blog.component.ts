import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../services/articulos/articulos.service';


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
  }

  ngOnInit() {
    this.artService.getById(this.id)
        .subscribe((articulo: any) => {
          console.log(articulo);
          this.articulo = articulo.articuloBD;
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
