
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, hasta: number = 100): any {
    return value.length > hasta ? value.substring(0, hasta) + '...' : value;
  }
}

