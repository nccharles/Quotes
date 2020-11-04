import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appTexthighlight]'
})
export class TexthighlightDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.backgroundColor="#FFCD0F"
  }

}
