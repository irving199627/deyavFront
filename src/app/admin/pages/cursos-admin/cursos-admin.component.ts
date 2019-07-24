import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../interfaces/cursos';
import { CursosService } from '../../../services/cursos/cursos.service';
import Swal from 'sweetalert2';
declare const $: any;

@Component({
  selector: 'app-cursos-admin',
  templateUrl: './cursos-admin.component.html',
  styleUrls: ['./cursos-admin.component.css']
})
export class CursosAdminComponent implements OnInit {
  cursos: Curso;
  total: number;
  constructor(
    public cursoService: CursosService
  ) {
  }

  ngOnInit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.cursoService.getCursos()
    .subscribe((cursos: any) => {
      console.log(cursos);
      this.cursos = cursos.cursos;
      this.total = cursos.totalConteo;
    });
  }

  borrarCurso(id: string) {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Está apunto de borrar este curso',
      type: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((borrar) => {
      if (borrar) {
        if (borrar.value) {
          this.cursoService.borrarCurso(id)
          .subscribe((respuesta: any) => {
            if (respuesta.ok) {
              Swal.fire('Correcto!', 'El artículo se ha eliminado de manera correcta', 'success');
              this.cursoService.getCursos().subscribe((cursos: any) => {
                this.cursos = cursos.cursos;
              });
            }
          });
        }
      }
    });
  }

}
