import { Directive ,ElementRef} from '@angular/core';



@Directive({
  selector: '[appBkcolor]'
})

export class BkcolorDirective {

  constructor(private elt:ElementRef) { 
  	this.elt.nativeElement.style.color="blue"; 

}
}
