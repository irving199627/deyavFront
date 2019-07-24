import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubirImagenService } from '../../../services/subirImagen/subir-imagen.service';
import { CursosService } from '../../../services/cursos/cursos.service';
import Swal from 'sweetalert2';
import { Curso } from '../../../interfaces/cursos';

@Component({
  selector: 'app-cursos-admin-nuevo',
  templateUrl: './cursos-admin-nuevo.component.html',
  styleUrls: ['./cursos-admin-nuevo.component.css']
})
export class CursosAdminNuevoComponent implements OnInit {
  parametroUrl: string;
  cursoEditar: Curso;
  titulo: string;
  descripcion: string;
  img;
  categoria;
  precio: number;
  nombreImagen;
  guardando = false;
  constructor(
    public route: ActivatedRoute,
    public subirImagenService: SubirImagenService,
    public cursosService: CursosService,
    private router: Router
  ) {
      this.route.params.subscribe((url: any) => {
      this.parametroUrl = url.action;
    });
      document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  ngOnInit() {
    if (this.parametroUrl !== 'nuevo') {
    this.cursosService.getPorId(this.parametroUrl)
    .subscribe(async (resp: any) => {
      this.cursoEditar = await resp.curso;
    });
  }
}
  crearCurso() {
    this.guardando = true;
    const body = {
      imagen: this.subirImagenService.imagen64,
      titulo: this.titulo,
      descripcion: this.descripcion,
      categoria: this.categoria,
      precio: this.precio
    };
    this.cursosService.createCurso(body)
    .subscribe((resp: any) => {
      if (resp.ok) {
        Swal.fire({
          title: 'Curso Creado',
          text: 'El curso ha sido creado con éxito',
          type: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok!'
        }).then((result) => {
          if (result.value) {
            this.guardando = false;
            this.subirImagenService.croppedImage = null;
            this.router.navigate(['/admin/cursos']);
          }
        });
      }
    });
  }

  actualizarCurso() {
    if (this.subirImagenService.imagen64 !== undefined) {
      const datosNuevos = {
        imagen: this.subirImagenService.imagen64,
        titulo: this.cursoEditar.titulo,
        descripcion: this.cursoEditar.descripcion,
        categoria: this.cursoEditar.categoria,
        precio: this.cursoEditar.precio,
        nombreImagen: this.nombreImagen
      };
  } else {
    const datosNuevos = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      categoria: this.categoria,
      precio: this.precio
    };
  }

}
}
