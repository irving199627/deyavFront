import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.length > 100 ? value.substring(0, 100) + '...' :   value;
  }

}
