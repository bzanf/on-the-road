import { Observable, of } from "rxjs";
import { Vehicle } from "../../domain/entities/vehicle.entity";
import { VehicleRepository } from "../../domain/repositories/vehicle.repository";

export class VehicleInMemoryRepository implements VehicleRepository {

    getAll(): Observable<Vehicle[]> {
        if (Math.random() > 0.7) {
            throw new Error("Error test.");
        }

        return of([
            new Vehicle(1, "AAA1231", "AAA", "BBB", 1, 3),
            new Vehicle(1, "AAA1231", "AAA", "BBB", 1, 3)
        ]);
    }

    add(vehicle: Vehicle): Observable<Vehicle> {
        if (Math.random() > 0.7) {
            throw new Error("Error test.");
        }

        return of(vehicle);
    }

}