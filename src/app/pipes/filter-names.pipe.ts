import {Pipe, PipeTransform} from '@angular/core';
import {ApiInterface} from '../interfaces/ApiInterface';

@Pipe({
  name: 'filterNames'
})
export class FilterNamesPipe implements PipeTransform {

  transform(list: ApiInterface[], search: string = ''): any {
    const lowerCaseSearch: string = search.toLowerCase().trim();
    return list.filter(game => {
      return game.name.toLowerCase().includes(lowerCaseSearch);
    });
  }

}
