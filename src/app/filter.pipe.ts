import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Employee[], args?: string): Employee[] {
    args = args.toLowerCase();
    return value.filter(val => 
      val.name.toLowerCase().startsWith(args.toLowerCase())
    );
  }

}