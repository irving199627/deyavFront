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
  constructor( public artService: ArticulosService ) {
  }

  ngOnInit() {
    this.artService.getArticulos()
    .subscribe(resp => {
      // this.blogs = resp;
      this.ultimo.push (this.artService.ultimo);
      this.ultimo = this.artService.limpiarHTML(this.ultimo);
      this.blogs = this.artService.limpiarHTML(resp);
      this.blogs.reverse();
    });
  }

}
