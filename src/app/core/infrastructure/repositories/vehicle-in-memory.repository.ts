import { Observable, of } from "rxjs";
import { randomVehicles } from "../../../shared/utils/random-vehicle";
import { VehicleRepository } from "../../domain/repositories/vehicle.repository";
import { Vehicle } from "../../domain/entities/vehicle.entity";
import { AppState } from "../../domain/entities/app-state.entity";

export class VehicleInMemoryRepository implements VehicleRepository {

    getAll(): Observable<Vehicle[]> {
        const savedState = localStorage.getItem('appState');
        if (savedState) {
            const appState: AppState = JSON.parse(savedState);
            return of(appState.vehicle?.vehicles?.map(x => Vehicle.fromJSON(x)) ?? []);
        }

        const count = Math.round(Math.random() * 5) + 4;
        return of(randomVehicles(count));
    }

    add(vehicle: Vehicle): Observable<Vehicle> {
        let lastIndex = 0;
        const savedState = localStorage.getItem('appState');

        if (savedState) {
            const appState: AppState = JSON.parse(savedState);
            let vehiclesIds = appState.vehicle?.vehicles?.map(v => Vehicle.fromJSON(v).id) ?? [0];
            vehiclesIds = vehiclesIds.length === 0 ? [0] : vehiclesIds;
            lastIndex = Math.max(...vehiclesIds);
        }

        const newVehicle = new Vehicle(
            lastIndex + 1,
            vehicle.plate,
            vehicle.brand,
            vehicle.model,
            vehicle.vehicleType,
            vehicle.axleCount
        );

        return of(newVehicle);
    }


    delete(id: number): Observable<number> {
        return of(id);
    }

}