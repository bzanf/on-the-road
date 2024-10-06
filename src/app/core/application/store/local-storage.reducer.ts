import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

export function localStorageReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        if (action.type === INIT || action.type === UPDATE) {
            const savedState = localStorage.getItem('appState');
            if (savedState) {
                return JSON.parse(savedState);
            }
        }

        const nextState = reducer(state, action);

        localStorage.setItem('appState', JSON.stringify(nextState));

        return nextState;
    };
}

// import { ActionReducerMap } from '@ngrx/store';
// // import { userReducer, UserState } from '../../features/vehicles/store/vehicle.reducer';
// import { State, vehicleReducer } from '../../features/vehicles/store/vehicle.reducer';

// export interface AppState {
//   vehicle: State;
// }

// export const reducers: ActionReducerMap<AppState> = {
//     vehicle: vehicleReducer
// };