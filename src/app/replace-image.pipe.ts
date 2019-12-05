import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceImage'
})
export class ReplaceImagePipe implements PipeTransform {

  transform(value: string): any {
    return value.replace('t_thumb', 't_cover_big');
  }

}
