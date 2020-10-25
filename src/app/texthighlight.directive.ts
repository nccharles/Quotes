import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appTexthighlight]'
})
export class TexthighlightDirective {

  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.textDeco("#FFCD0F")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("transparent")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor=action;

  }
}
