import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const newVal = value.trim();
    if (newVal.length > 0) {
      return newVal.charAt(0).toUpperCase() + newVal.slice(1).toLowerCase();
    }
    return '';
  }

}
