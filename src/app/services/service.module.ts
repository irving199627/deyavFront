import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { ArticulosService } from './articulos/articulos.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    UsuariosService,
    ArticulosService
  ]
})
export class ServiceModule { }
