export class Vehicle {

    private _id: number;
    private _plate: string;
    private _brand: string;
    private _model: string;
    private _axleCount: number;

    constructor(id: number, plate: string, brand: string, model: string, axleCount: number) {
        this._id = id;
        this._plate = plate;
        this._brand = brand;
        this._model = model;
        this._axleCount = axleCount;
    }

    get axleCount(): number {
        return this._axleCount;
    }

}