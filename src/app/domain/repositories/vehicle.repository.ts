import { Vehicle } from "../entities/vehicle.entity";

export abstract class VehicleRepository {
    abstract getAll(): Promise<Vehicle[]>;
}