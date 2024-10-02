import { createReducer, on } from '@ngrx/store';
import { Vehicle } from '../../../domain/entities/vehicle.entity';
import * as VehicleActions from './vehicle.actions';

export interface State {
    vehicles: Vehicle[];
    loading: boolean;
    error: any;
}

export const initialState: State = {
    vehicles: [],
    loading: false,
    error: null,
};

export const vehicleReducer = createReducer(
    initialState,
    on(VehicleActions.load, state => ({ ...state, loading: true })),
    on(VehicleActions.loadSuccess, (state, { vehicles }) => ({ ...state, loading: false, vehicles })),
    on(VehicleActions.loadFailure, (state, { error }) => ({ ...state, loading: false, error })),

    on(VehicleActions.add, state => ({ ...state, loading: true })),
    on(VehicleActions.addSuccess, (state, { vehicle }) => ({ ...state, vehicles: [...state.vehicles, vehicle] })),
    on(VehicleActions.loadFailure, (state, { error }) => ({ ...state, loading: false, error })),
);