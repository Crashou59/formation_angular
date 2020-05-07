import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value === 'F' ? 'Female' : 'Male';
  }

}
