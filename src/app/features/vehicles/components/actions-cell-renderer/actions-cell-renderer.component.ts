import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Vehicle } from '../../../../core/domain/entities/vehicle.entity';
import { TooltipDirective } from '../../../../shared/directives/tooltip/tooltip.directive';
import { Store } from '@ngrx/store';
import { delete_ } from '../../store/vehicle.actions';

@Component({
  selector: 'app-actions-cell-renderer',
  standalone: true,
  imports: [TooltipDirective],
  templateUrl: './actions-cell-renderer.component.html',
  styleUrl: './actions-cell-renderer.component.scss'
})
export class ActionsCellRendererComponent implements ICellRendererAngularComp {

  params!: ICellRendererParams<Vehicle>;

  constructor(private store: Store) { }

  agInit(params: ICellRendererParams<Vehicle>): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams<Vehicle>): boolean {
    this.params = params;
    return true;
  }

  edit() {

  }

  delete() {
    const id = this.params.data?.id;
    if (id !== undefined) {
      this.store.dispatch(delete_({ id: id }));
    }
  }

}
