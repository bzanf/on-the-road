import { Component, Input } from '@angular/core';
import { Vehicle } from '../../../../domain/entities/vehicle.entity';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { randomVehicles } from '../../../../shared/utils/random-vehicle';

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
    { field: "plate" },
    { valueGetter: params => (params.data?.brand + '/' + params.data?.model) },
    { field: "type" },
  ];

  data: Vehicle[] = randomVehicles(5); 

}
