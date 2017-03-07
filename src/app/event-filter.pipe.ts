import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //return null;
    let filter = args[0];//.toLocaleLowerCase();
    return filter ? value.filter(
    	event=> event.name.toLocaleLowerCase().indexOf(filter) != -1
    ) : value;
  }
}
