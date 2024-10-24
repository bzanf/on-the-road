import { Vehicle } from "../../core/domain/entities/vehicle.entity";
import { randomString } from "./random-string";

export function randomVehicles(count: number): Vehicle[] {
    let vehicles: Vehicle[] = [];

    for (let index = 0; index < count; index++) {
        const plate = randomString('text', 3) + randomString('number', 4);
        const brand = randomString('text', Math.round(Math.random() * 8) + 5);
        const model = randomString('text', Math.round(Math.random() * 8) + 5);
        const type = Math.round(Math.random() * 2) + 1;

        vehicles.push(new Vehicle(undefined, plate, brand, model, type, 2));
    }

    return vehicles;
}