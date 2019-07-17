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
  p = 0;
  collection = [];
  constructor( public artService: ArticulosService ) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  ngOnInit() {
    this.artService.getArticulos()
    .subscribe(resp => {
      this.blogs = resp;
      console.log(this.blogs);
    });
    this.artService.getUltimoArticulos()
    .subscribe((resp: any) => {
      this.ultimoActivo = resp.articulos[0];
      console.log(resp.articulos[0]);
    });
  }

}
