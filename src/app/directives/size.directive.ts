import { Directive, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core/src/metadata/directives';


@Directive({
  selector: '[appSize]'
})
export class SizeDirective {

  constructor() { }

//   @HostListener() onMouseEnter() {
//     this.hover(true);
// }

// @HostListener("resize") onresize(){

// }

}
