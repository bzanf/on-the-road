import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { VehicleInMemoryRepository } from './infrastructure/repositories/vehicle-in-memory.repository';
import { VehicleRepository } from './domain/repositories/vehicle.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    { provide: VehicleRepository, useClass: VehicleInMemoryRepository }
  ]
};
