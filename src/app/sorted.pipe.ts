import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorted'
})
export class SortedPipe implements PipeTransform {

  transform(array: any[], args?: any): any {
    let sorted = array.sort();

    if (args.length > 0 && args === 'DESC')
      sorted = sorted.reverse();

    return sorted;
  }

}
