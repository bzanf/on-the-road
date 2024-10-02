import { Attribute, Component, ElementRef, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'custom-card',
  standalone: true,
  imports: [],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.scss',
})
export class CustomCardComponent {

  @HostBinding('class.col') get col() {
    return !(this.classNames?.split(' ').includes('w-100') ?? false);
  }

  @Input() title?: string;

  constructor(@Attribute('class') private classNames: string) { }

}