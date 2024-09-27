import { Driver } from "./driver.entity";
import { Vehicle } from "./vehicle.entity";

export class VehicleSet {

    private _id: number;
    private _vehicles: Vehicle[];
    private _driver: Driver;

    constructor(id: number, vehicles: Vehicle[], driver: Driver) {
        this._id = id;
        this._vehicles = vehicles;
        this._driver = driver;
    }

    get axleCount(): number {
        return this._vehicles.reduce((acc, item) => acc + item.axleCount, 0);
    }

}