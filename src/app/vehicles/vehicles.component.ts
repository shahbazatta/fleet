import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiclesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
