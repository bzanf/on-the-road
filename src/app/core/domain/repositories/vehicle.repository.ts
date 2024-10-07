import { Observable } from "rxjs";
import { Vehicle } from "../entities/vehicle.entity";

export abstract class VehicleRepository {
    abstract getAll(): Observable<Vehicle[]>;
    abstract add(vehicle: Vehicle): Observable<Vehicle>;
    abstract delete(id: number): Observable<number>;
}