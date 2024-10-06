import { createAction, props } from '@ngrx/store';
import { Vehicle } from '../../../core/domain/entities/vehicle.entity';

export const load = createAction('[Vehicles] Load Vehicles');
export const loadSuccess = createAction('[Vehicles] Load Vehicles Success', props<{ vehicles: Vehicle[] }>());
export const loadFailure = createAction('[Vehicles] Load Vehicles Failure', props<{ error: any }>());

export const add = createAction('[Vehicles] Add Vehicle', props<{ vehicle: Vehicle }>());
export const addSuccess = createAction('[Vehicles] Add Vehicle Success', props<{ vehicle: Vehicle }>());
export const addFailure = createAction('[Vehicles] Add Vehicle Failure', props<{ error: any }>());