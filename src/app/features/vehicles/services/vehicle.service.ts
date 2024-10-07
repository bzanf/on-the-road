import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleRepository } from '../../../core/domain/repositories/vehicle.repository';
import { Vehicle } from '../../../core/domain/entities/vehicle.entity';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  constructor(private vehicleRepository: VehicleRepository) { }

  getAll(): Observable<Vehicle[]> {
    return this.vehicleRepository.getAll();
  }

  add(vehicle: Vehicle): Observable<Vehicle> {
    return this.vehicleRepository.add(vehicle);
  }

  delete(id: number): Observable<number> {
    return this.vehicleRepository.delete(id);
  }

}
