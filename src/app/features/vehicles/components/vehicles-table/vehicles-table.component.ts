import { Component, Input } from '@angular/core';
import { Vehicle } from '../../../../domain/entities/vehicle.entity';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vehicles-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicles-table.component.html',
  styleUrl: './vehicles-table.component.scss'
})
export class VehiclesTableComponent {

  @Input() data$!: Observable<Vehicle[]>;

}
