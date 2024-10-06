import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { VehicleInMemoryRepository } from './app/core/infrastructure/repositories/vehicle-in-memory.repository';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { VehicleEffects } from './app/features/vehicles/store/vehicle.effects';
import { vehicleReducer } from './app/features/vehicles/store/vehicle.reducer';
import { routes } from './app/core/presentation/routing/app.routes';
import { localStorageReducer } from './app/core/application/store/local-storage.reducer';
import { VehicleRepository } from './app/core/domain/repositories/vehicle.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ vehicle: vehicleReducer }, { metaReducers: [localStorageReducer] }),
    provideEffects(VehicleEffects),
    { provide: VehicleRepository, useClass: VehicleInMemoryRepository },
  ]
};
