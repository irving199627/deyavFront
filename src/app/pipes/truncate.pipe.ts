import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.length > 200 ? value.substring(0, 200) + '...' :   value;
  }

}
