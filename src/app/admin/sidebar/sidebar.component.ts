import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menu: any = [
    {
      titulo: 'Mantenimientos',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: '/admin/usuarios' },
        { titulo: 'Blog', url: '/admin/blog' },
        { titulo: 'Noticias', url: '/admin/noticias' },
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
