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