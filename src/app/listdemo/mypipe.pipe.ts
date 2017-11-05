import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, times: number): any {
    return value.repeat(times);
  }

}
