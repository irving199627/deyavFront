import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../../services/articulos/articulos.service';


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

  change(evento) {
    this.p = evento;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
