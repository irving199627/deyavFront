import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos/articulos.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs = [];
  ultimo = [];
  ultimoActivo: any = [];
  constructor( public artService: ArticulosService ) {
  }

  ngOnInit() {
    this.artService.getArticulos()
    .subscribe(resp => {
      // this.blogs = resp;
      this.ultimo = this.artService.limpiarHTML(this.artService.ultimo);
      this.ultimoActivo = this.ultimo[this.ultimo.length - 1];
      this.blogs = resp;
      this.blogs.reverse();
    });
  }

}
