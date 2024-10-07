import { Actions, createEffect, ofType } from "@ngrx/effects";
import { VehicleService } from "../services/vehicle.service";
import { Injectable } from "@angular/core";
import * as VehicleActions from './vehicle.actions';
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class VehicleEffects {

    loadVehicles$;
    addVehicle$;
    deleteVehicle$;

    constructor(
        private actions$: Actions,
        private vehicleService: VehicleService,
    ) {
        this.loadVehicles$ = createEffect(() =>
            this.actions$.pipe(
                ofType(VehicleActions.load),
                mergeMap(() =>
                    this.vehicleService.getAll().pipe(
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
                    this.vehicleService.add(action.vehicle).pipe(
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
                    this.vehicleService.delete(action.id).pipe(
                        map(() => VehicleActions.deleteSuccess({ id: action.id })),
                        catchError(error => of(VehicleActions.deleteFailure({ error })))
                    )
                )
            )
        );
    }

}