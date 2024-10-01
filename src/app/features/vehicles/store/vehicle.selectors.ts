import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './vehicle.reducer';

export const selectVehicle = createFeatureSelector<State>('vehicle');

export const selectAll = createSelector(
    selectVehicle,
    (state: State) => state.vehicles
);

export const selectLoading = createSelector(
    selectVehicle,
    (state: State) => state.loading
);

export const selectError = createSelector(
    selectVehicle,
    (state: State) => state.error
);