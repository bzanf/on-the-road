import { Vehicle } from "../../domain/entities/vehicle.entity";
import { VehicleRepository } from "../../domain/repositories/vehicle.repository";

export class VehicleInMemoryRepository implements VehicleRepository {

    async getAll(): Promise<Vehicle[]> {
        return [
            new Vehicle(1, "AAA1231", "AAA", "BBB", 1, 3)
        ];
    }

}