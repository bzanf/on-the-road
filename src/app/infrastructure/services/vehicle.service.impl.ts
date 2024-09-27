import { Inject, Injectable } from '@angular/core';
import { Vehicle } from '../../domain/entities/vehicle.entity';
import { VehicleRepository } from '../../domain/repositories/vehicle.repository';
import { VehicleService } from '../../domain/services/vehicle.service';

@Injectable({
  providedIn: 'root',
})
export class VehicleServiceImpl extends VehicleService {

  constructor(private vehicleRepository: VehicleRepository) {
    super();
  }

  async getAll(): Promise<Vehicle[]> {
    return await this.vehicleRepository.getAll();
  }

}
