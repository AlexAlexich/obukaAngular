import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personName'
})
export class PersonNamePipe implements PipeTransform {

  transform(value: string, form: string): string {
    form = form.toLowerCase();
    let result = `${value} - ${value.length}`;
    if (form === 'u') {
      return result.toUpperCase();
    }
    if (form === 'l') {
      return result.toLowerCase();
    }
    return result;
  }

}
