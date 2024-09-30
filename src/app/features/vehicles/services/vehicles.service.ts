import { Inject, Injectable } from '@angular/core';
import { Vehicle } from '../../../domain/entities/vehicle.entity';
import { VehicleRepository } from '../../../domain/repositories/vehicle.repository';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  constructor(private vehicleRepository: VehicleRepository) { }

  async getAll(): Promise<Vehicle[]> {
    return await this.vehicleRepository.getAll();
  }

}
