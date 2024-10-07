import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, FirstDataRenderedEvent } from 'ag-grid-community';
import { Vehicle } from '../../../../core/domain/entities/vehicle.entity';
import { ActionsCellRendererComponent } from '../actions-cell-renderer/actions-cell-renderer.component';

@Component({
  selector: 'vehicles-table',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  templateUrl: './vehicles-table.component.html',
  styleUrl: './vehicles-table.component.scss'
})
export class VehiclesTableComponent {

  @Input() data$!: Observable<Vehicle[]>;

  colDefs: ColDef<Vehicle, string>[] = [
    { field: 'plate' },
    {
      headerName: 'Brand/Model',
      valueGetter: params => (params.data?.brand + '/' + params.data?.model)
    },
    { field: 'type' },
    { headerName: 'Actions', cellRenderer: ActionsCellRendererComponent }
  ];

  onFirstDataRendered(param: FirstDataRenderedEvent) {
    param.api.sizeColumnsToFit();
  }

}
