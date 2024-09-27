import { Vehicle } from "../entities/vehicle.entity";

export abstract class VehicleService {
    abstract getAll(): Promise<Vehicle[]>;
}