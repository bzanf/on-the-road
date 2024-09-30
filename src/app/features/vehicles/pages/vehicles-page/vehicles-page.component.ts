import { Component, OnInit } from '@angular/core';
import { VehiclesTableComponent } from "../../components/vehicles-table/vehicles-table.component";
import { Vehicle } from '../../../../domain/entities/vehicle.entity';
import { VehicleService } from '../../services/vehicles.service';

@Component({
  selector: 'vehicles-page',
  standalone: true,
  imports: [VehiclesTableComponent],
  templateUrl: './vehicles-page.component.html',
  styleUrl: './vehicles-page.component.scss',
})
export class VehiclesPageComponent implements OnInit {

  vehicles: Vehicle[] = [];

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    this.vehicles = await this.vehicleService.getAll();
  }

}
