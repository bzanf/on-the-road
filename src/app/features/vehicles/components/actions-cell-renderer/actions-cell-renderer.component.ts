import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Vehicle } from '../../../../core/domain/entities/vehicle.entity';
import { TooltipDirective } from '../../../../shared/directives/tooltip/tooltip.directive';

@Component({
  selector: 'app-actions-cell-renderer',
  standalone: true,
  imports: [TooltipDirective],
  templateUrl: './actions-cell-renderer.component.html',
  styleUrl: './actions-cell-renderer.component.scss'
})
export class ActionsCellRendererComponent implements ICellRendererAngularComp {

  params!: ICellRendererParams<Vehicle>;

  constructor() { }

  agInit(params: ICellRendererParams<Vehicle>): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams<Vehicle>): boolean {
    this.params = params;
    return true;
  }

}
