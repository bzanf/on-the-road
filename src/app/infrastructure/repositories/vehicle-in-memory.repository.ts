import { Observable, of } from "rxjs";
import { Vehicle } from "../../domain/entities/vehicle.entity";
import { VehicleRepository } from "../../domain/repositories/vehicle.repository";
import { randomVehicles } from "../../shared/utils/random-vehicle";
import { AppState } from "../../core/entities/app-state.entity";

export class VehicleInMemoryRepository implements VehicleRepository {

    getAll(): Observable<Vehicle[]> {
        // console.log('get all');
        // if (Math.random() > 0.7) {
        //     throw new Error("Error test.");
        // }

        const savedState = localStorage.getItem('appState');
        if (savedState) {
            const appState: AppState = JSON.parse(savedState);
            return of(appState.vehicle?.vehicles?.map(x => Vehicle.fromJSON(x)) ?? []);
        }

        const count = Math.round(Math.random() * 5) + 4;
        return of(randomVehicles(count));
    }

    add(vehicle: Vehicle): Observable<Vehicle> {
        // console.log('add');
        // if (Math.random() > 0.7) {
        //     throw new Error("Error test.");
        // }

        return of(vehicle);
    }

}