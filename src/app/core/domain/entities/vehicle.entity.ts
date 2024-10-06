import { VehicleType } from "./enums/vehicle-type.enum";

export class Vehicle {

    private _id: number;
    private _plate: string;
    private _brand: string;
    private _model: string;
    private _type: VehicleType;
    private _axleCount: number;

    constructor(id: number, plate: string, brand: string, model: string, type: VehicleType, axleCount: number) {
        this._id = id;
        this._plate = plate;
        this._brand = brand;
        this._model = model;
        this._type = type;
        this._axleCount = axleCount;
    }

    get id(): number {
        return this._id;
    }

    get plate(): string {
        return this._plate;
    }

    get brand(): string {
        return this._brand;
    }

    get model(): string {
        return this._model;
    }

    get type(): string {
        return VehicleType[this._type];
    }

    get axleCount(): number {
        return this._axleCount;
    }

    static fromJSON(json: any): Vehicle {
        return new Vehicle(
            json._id,
            json._plate,
            json._brand,
            json._model,
            json._type,
            json._axleCount
        );
    }

}