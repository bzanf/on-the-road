import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import * as VehicleActions from './vehicle.actions';
import { catchError, map, mergeMap, of } from "rxjs";
import { VehicleRepository } from "../../../core/domain/repositories/vehicle.repository";

@Injectable()
export class VehicleEffects {

    loadVehicles$;
    addVehicle$;
    deleteVehicle$;

    constructor(
        private actions$: Actions,
        private vehicleRepository: VehicleRepository, 
    ) {
        this.loadVehicles$ = createEffect(() =>
            this.actions$.pipe(
                ofType(VehicleActions.load),
                mergeMap(() =>
                    this.vehicleRepository.getAll().pipe(
                        map(vehicles => VehicleActions.loadSuccess({ vehicles })),
                        catchError(error => of(VehicleActions.loadFailure({ error })))
                    )
                )
            )
        );

        this.addVehicle$ = createEffect(() =>
            this.actions$.pipe(
                ofType(VehicleActions.add),
                mergeMap(action =>
                    this.vehicleRepository.add(action.vehicle).pipe(
                        map(vehicle => VehicleActions.addSuccess({ vehicle })),
                        catchError(error => of(VehicleActions.addFailure({ error })))
                    )
                )
            )
        );

        this.deleteVehicle$ = createEffect(() =>
            this.actions$.pipe(
                ofType(VehicleActions.delete_),
                mergeMap(action =>
                    this.vehicleRepository.delete(action.id).pipe(
                        map(() => VehicleActions.deleteSuccess({ id: action.id })),
                        catchError(error => of(VehicleActions.deleteFailure({ error })))
                    )
                )
            )
        );
    }

}