import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(array: [], key: string): [] {
    return array.sort(function (a, b) {
      if (a[key] > b[key]) {
        return 1;
      }
      if (a[key] < b[key]) {
        return -1;
      }
      return 0;
    });
  }
}
