import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {

    let url = URL_SERVICIOS + '/img';

    if (!img) {
      return url + '/usuario/xxx';
    }
    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch ( tipo) {
      case 'usuario':
          url += '/blog/' + img;
          break;

      case 'hospital':
          url += '/noticias/' + img;
          break;

        default:
          console.log('tipo de imagen no existe, usuarios, medicos, hospitales');
          url += '/usuarios/xxx';
    }
    return url;
  }

}
