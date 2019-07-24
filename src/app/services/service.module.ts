import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService, ArticulosService, CargarImagenesService, CursosService, SubirImagenService } from './service.index';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    UsuariosService,
    ArticulosService,
    CargarImagenesService,
    SubirImagenService,
    CursosService
  ]
})
export class ServiceModule { }
