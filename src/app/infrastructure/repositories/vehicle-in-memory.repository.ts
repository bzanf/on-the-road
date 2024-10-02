import { Observable, of } from "rxjs";
import { Vehicle } from "../../domain/entities/vehicle.entity";
import { VehicleRepository } from "../../domain/repositories/vehicle.repository";
import { randomVehicles } from "../../shared/utils/random-vehicle";

export class VehicleInMemoryRepository implements VehicleRepository {

    getAll(): Observable<Vehicle[]> {
        console.log('get all');

        if (Math.random() > 0.7) {
            throw new Error("Error test.");
        }

        const count = Math.round(Math.random() * 5) + 4;
        return of(randomVehicles(count));
    }

    add(vehicle: Vehicle): Observable<Vehicle> {
        console.log('add');
        if (Math.random() > 0.7) {
            throw new Error("Error test.");
        }

        return of(vehicle);
    }

}