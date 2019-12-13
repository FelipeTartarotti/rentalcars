import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badgeName'
})
export class BadgeNamePipe implements PipeTransform {

  transform(value: any): any {

    if(value){

      if(value.indexOf('airport') !== -1){
        return "Airport";
      }
  
      else if(value.indexOf('city') !== -1){
        return "City";
      }
  
      else if(value.indexOf('train') !== -1){
        return "Station";
      }

      else if(value.indexOf('region') !== -1){
        return "Region";
      }

      else if(value.indexOf('district') !== -1){
        return "District";
      }


      

    }

  }

}
