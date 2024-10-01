import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { VehicleInMemoryRepository } from './infrastructure/repositories/vehicle-in-memory.repository';
import { VehicleRepository } from './domain/repositories/vehicle.repository';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { VehicleEffects } from './features/vehicles/store/vehicle.effects';
import { vehicleReducer } from './features/vehicles/store/vehicle.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ vehicle: vehicleReducer }),
    provideEffects(VehicleEffects),
    { provide: VehicleRepository, useClass: VehicleInMemoryRepository },
  ]
};
