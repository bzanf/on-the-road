import { createReducer, on } from '@ngrx/store';
import * as VehicleActions from './vehicle.actions';
import { Vehicle } from '../../../core/domain/entities/vehicle.entity';

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
    on(VehicleActions.addSuccess, (state, { vehicle }) => ({ ...state, loading: false, vehicles: [...state.vehicles, vehicle] })),
    on(VehicleActions.loadFailure, (state, { error }) => ({ ...state, loading: false, error })),

    on(VehicleActions.delete_, state => ({ ...state, loading: true })),
    on(VehicleActions.deleteSuccess, (state, { id }) => ({ ...state, loading: false, vehicles: state.vehicles.filter(v => v.id !== id) })),
    on(VehicleActions.deleteFailure, (state, { error }) => ({ ...state, loading: false, error })),
);