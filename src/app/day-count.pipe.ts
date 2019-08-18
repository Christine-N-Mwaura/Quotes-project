import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayCount'
})
export class DayCountPipe implements PipeTransform {

  transform(value: any):number {
    let currentDate:Date = new Date();
    let withoutTime:any = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate())
    var dateDifference = Math.abs(withoutTime - value)
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && value > withoutTime){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
