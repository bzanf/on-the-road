import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Directive({
  selector: '[bsTooltip]',
  standalone: true
})
export class TooltipDirective implements AfterViewInit, OnDestroy {

  tooltip!: Tooltip;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.tooltip = new Tooltip(this.elementRef.nativeElement, { trigger: 'hover' });
  }

  ngOnDestroy(): void {
    this.tooltip?.dispose();
  }

}