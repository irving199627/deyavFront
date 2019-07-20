import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    ImagenPipe,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagenPipe,
    TruncatePipe
  ]
})
export class PipesModule { }
