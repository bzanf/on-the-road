import { Component, OnInit } from '@angular/core';
import { VehiclesTableComponent } from "../../components/vehicles-table/vehicles-table.component";
import { Vehicle } from '../../../../domain/entities/vehicle.entity';
import { Store } from '@ngrx/store';
import { selectAll, selectLoading } from '../../store/vehicle.selectors';
import { load, add } from '../../store/vehicle.actions';
import { Observable } from 'rxjs';
import { randomVehicles } from '../../../../shared/utils/random-vehicle';
import { CustomCardComponent } from '../../../../shared/components/custom-card/custom-card.component';

@Component({
  selector: 'vehicles-page',
  standalone: true,
  imports: [VehiclesTableComponent, CustomCardComponent],
  templateUrl: './vehicles-page.component.html',
  styleUrl: './vehicles-page.component.scss'
})
export class VehiclesPageComponent implements OnInit {

  vehicles$: Observable<Vehicle[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.vehicles$ = this.store.select(selectAll);
    this.loading$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles() {
    this.store.dispatch(load());
  }

  addVehicle() {
    const vehicle = randomVehicles(1)[0];
    this.store.dispatch(add({ vehicle }));
  }

  test() {

  }

}
