import { Injectable } from '@angular/core';
import { ArticulosService } from '../articulos/articulos.service';
import Swal from 'sweetalert2';
import { ImageCroppedEvent } from 'ngx-image-cropper';
declare const $: any;
@Injectable({
  providedIn: 'root'
})
export class SubirImagenService {
  imagen64;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  evento = {
    width: 0,
    height: 0
  };
  constructor(
    public artService: ArticulosService,
  ) { }

  fileChangeEvent(event: any): void {
    console.log(event);
    if (event) {
      if (!event.target.files[0].type.startsWith('image')) {
        Swal.fire('No es una imagen', 'Solo seleccionar imagenes con las extenciones jpg, jpge, png', 'error');
        $('#imagen')[0].value = '';
        return;
      }
      const extensionesValidas = ['jpg', 'png', 'jpeg'];
      const extensionArchivo = event.target.files[0].type.split('/')[1];
      if (extensionesValidas.indexOf(extensionArchivo) < 0) {
        Swal.fire('Extensión no válida', 'Solo seleccionar imagenes con las extenciones jpg, jpge, png', 'error');
        return;
      }
      this.imageChangedEvent = event;
    }
}

imageCropped(event: ImageCroppedEvent) {
  if (event.file.type.startsWith('image')) {
    this.croppedImage = event.base64;
    const imagen64 = this.croppedImage.toString();
    const imagenbase64 = imagen64.replace('data:image/png;base64,', '');
    this.imagen64 = imagenbase64;
    this.evento = event;
  } else {
    Swal.fire('No es una imagen', 'Solo seleccionar imagenes con las extenciones jpg, jpge, png', 'error');
  }

  // const binaryData = new Buffer(this.croppedImage.replace(/^data:image\/png;base64,/, ''), 'base64').toString('binary');
  // console.log(binaryData);
}
}
