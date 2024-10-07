import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Directive({
  selector: '[bsTooltip]',
  standalone: true
})
export class TooltipDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    new Tooltip(this.elementRef.nativeElement);
  }

}