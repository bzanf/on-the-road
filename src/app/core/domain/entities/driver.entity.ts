import { Vehicle } from "./vehicle.entity";

export class Driver {

    private _id: number;
    private _name: string;
    private _vehicles: Vehicle[];

    constructor(id: number, name: string, vehicles: Vehicle[]) {
        this._id = id;
        this._name = name;
        this._vehicles = vehicles;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get vehicles(): Vehicle[] {
        return this._vehicles;
    }

}