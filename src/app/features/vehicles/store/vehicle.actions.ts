import { createAction, props } from '@ngrx/store';
import { Vehicle } from '../../../domain/entities/vehicle.entity';

export const load = createAction('[Vehicles] Load Vehicles');
export const loadSuccess = createAction('[Vehicles] Load Vehicles Success', props<{ vehicles: Vehicle[] }>());
export const loadFailure = createAction('[Vehicles] Load Vehicles Failure', props<{ error: any }>());

export const addVehicle = createAction('[Vehicles] Add Vehicle', props<{ vehicle: Vehicle }>());
export const addVehicleSuccess = createAction('[Vehicles] Add Vehicle Success', props<{ vehicle: Vehicle }>());
export const addVehicleFailure = createAction('[Vehicles] Add Vehicle Failure', props<{ error: any }>());