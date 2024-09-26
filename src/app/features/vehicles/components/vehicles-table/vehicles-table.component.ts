import { Component } from '@angular/core';
import { VehicleRowComponent } from "../vehicle-row/vehicle-row.component";
import { VehicleHeaderComponent } from "../vehicle-header/vehicle-header.component";

@Component({
  selector: 'vehicles-table',
  standalone: true,
  imports: [VehicleRowComponent, VehicleHeaderComponent],
  templateUrl: './vehicles-table.component.html',
  styleUrl: './vehicles-table.component.scss'
})
export class VehiclesTableComponent {

}
