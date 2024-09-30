import { Component, Input } from '@angular/core';
import { Vehicle } from '../../../../domain/entities/vehicle.entity';

@Component({
  selector: 'vehicles-table',
  standalone: true,
  imports: [],
  templateUrl: './vehicles-table.component.html',
  styleUrl: './vehicles-table.component.scss'
})
export class VehiclesTableComponent {

  @Input() data: Vehicle[] = [];

}
