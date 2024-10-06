import { Vehicle } from "../../domain/entities/vehicle.entity";

export interface AppState {
    vehicle?: { vehicles?: Vehicle[] };
}