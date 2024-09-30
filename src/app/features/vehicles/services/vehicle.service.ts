import { Inject, Injectable } from '@angular/core';
import { Vehicle } from '../../../domain/entities/vehicle.entity';
import { VehicleRepository } from '../../../domain/repositories/vehicle.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  constructor(private vehicleRepository: VehicleRepository) { }

  getAll(): Observable<Vehicle[]> {
    return this.vehicleRepository.getAll();
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.vehicleRepository.add(vehicle);
  }

}
