import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  counter = 0;
  @Output() itemEvent = new EventEmitter<string>();
  constructor(private el: ElementRef) {
  }
  @HostListener('mouseenter') onMouseEnter(): void {
    this.higlight(true)
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.counter++;
    this.higlight(false)
    this.forwardData()
  }
  private higlight(isIn: boolean): void {
    if (!isIn) {
      this.el.nativeElement.classList.remove('cile-hover-red');
      return;
    }
    this.el.nativeElement.classList.add('cile-hover-red')
  }
  private forwardData(): void {
    if (this.counter > 5) this.itemEvent.emit('More than 5');
  }

}
