import { Directive, Input, TemplateRef, ViewContainerRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBadge]'
})
export class BadgeDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input() set appBadge(condition) {
    if(condition){
      console.log(condition);

      if(condition.indexOf('airport') !== -1){
        this.backgroundColor = '#961412';
      }
  
      else if(condition.indexOf('city') !== -1){
        this.backgroundColor = '#0A63B0';
      }
  
      else if(condition.indexOf('train') !== -1){
        this.backgroundColor = '#5B5B5B';
      }

      else if(condition.indexOf('region') !== -1){
        this.backgroundColor = '#F1C74C';
      }

      else if(condition.indexOf('district') !== -1){
        this.backgroundColor = '#017C44';
      }

    }
        
  }
  constructor() { }

}
