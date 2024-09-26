import { Component } from '@angular/core';
import { VehiclesTableComponent } from "../../components/vehicles-table/vehicles-table.component";

@Component({
  selector: 'vehicles-page',
  standalone: true,
  imports: [VehiclesTableComponent],
  templateUrl: './vehicles-page.component.html',
  styleUrl: './vehicles-page.component.scss'
})
export class VehiclesPageComponent {

}
