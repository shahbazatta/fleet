/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {Injectable} from '@angular/core';
import {Vehicle, VehicleConditionStatus, VehicleStatus, VehicleType} from '../../interfaces/common';
import {EventsService} from './events.service';
import {DriversService} from './drivers.service';

@Injectable()
export class VehiclesService {
  constructor(private eventsService: EventsService,
              private driverService: DriversService) {
  }

  data = [
    {
      name: 'CR 1565',
      vin: '1FVAF3CV84DM31815',
      model: 'model a',
      color: 'red',
      year: 2010,
      licensePlate: 'rogirg8er8nr8ne8ren',
      type: VehicleType.TRUCK,
      status: VehicleStatus.AVAILABLE,
      odometer: 1024,

      condition: {
        overview: 65,
        status: VehicleConditionStatus.SATISFACTORY
      },

      indicators: {
        engine: true,
        battery: false,
        oil: 70,
        gas: 90,
      },

      assignedDrivers: [{
        driver: this.driverService.getRandomDriver(),
        startDate: this.getIncrementedDate(4),
        endDate: this.getIncrementedDate(7),
      }, {
        driver: this.driverService.getRandomDriver(),
        startDate: this.getIncrementedDate(4),
        endDate: this.getIncrementedDate(7),
      },
      ],

      events: this.eventsService.getRandomEvents(),
      currentEvent: this.eventsService.getRandomEvent(),
    }, {
      name: 'PN 8719',
      vin: 'JN1BY1AR3BM374797',
      model: 'model b',
      color: 'white',
      year: 2011,
      licensePlate: 'rogoe8hefbuben',
      type: VehicleType.TRUCK,
      status: VehicleStatus.AVAILABLE,
      odometer: 10240,

      condition: {
        overview: 90,
        status: VehicleConditionStatus.GOOD
      },

      indicators: {
        engine: true,
        battery: true,
        oil: 95,
        gas: 90,
      },

      assignedDrivers: [{
        driver: this.driverService.getRandomDriver(),
        startDate: this.getIncrementedDate(1),
        endDate: this.getIncrementedDate(2),
      }, {
        driver: this.driverService.getRandomDriver(),
        startDate: this.getIncrementedDate(1),
        endDate: this.getIncrementedDate(2),
      }, {
        driver: this.driverService.getRandomDriver(),
        startDate: this.getIncrementedDate(1),
        endDate: this.getIncrementedDate(2),
      },
      ],

      events: this.eventsService.getRandomEvents(),
      currentEvent: this.eventsService.getRandomEvent(),
    }, {
      name: 'DL 6389',
      vin: '3VWDX7AJ5BM006256',
      model: 'model a',
      color: 'blue',
      year: 2006,
      licensePlate: 'rie8he8hfren',
      type: VehicleType.VAN,
      status: VehicleStatus.ON_ROUTE,
      odometer: 1024,

      condition: {
        overview: 45,
        status: VehicleConditionStatus.SATISFACTORY
      },

      indicators: {
        engine: false,
        battery: true,
        oil: 40,
        gas: 80,
      },

      assignedDrivers: [{
        driver: this.driverService.getRandomDriver(),
        startDate: this.getIncrementedDate(8),
        endDate: this.getIncrementedDate(11),
      }],

      events: this.eventsService.getRandomEvents(),
      currentEvent: this.eventsService.getRandomEvent(),
    }, {
      name: 'CD 4926',
      vin: 'WMWRC33474TC49530',
      model: 'model x',
      color: 'blue',
      year: 2008,
      licensePlate: 'riesacszsfren',
      type: VehicleType.CAR,
      status: VehicleStatus.OUT_OF_SERVICE,
      odometer: 10254,

      condition: {
        overview: 20,
        status: VehicleConditionStatus.CRITICAL
      },

      indicators: {
        engine: false,
        battery: false,
        oil: 40,
        gas: 20,
      },

      assignedDrivers: null,

      events: this.eventsService.getRandomEvents(),
      currentEvent: this.eventsService.getRandomEvent(),
    }, {
      name: 'ML 4827',
      vin: 'JH4DB1671NS000248',
      model: 'model',
      color: 'blue',
      year: 2006,
      licensePlate: 'rie8he8hfren',
      type: VehicleType.TRUCK,
      status: VehicleStatus.OUT_OF_SERVICE,
      odometer: 1024,

      condition: {
        overview: 30,
        status: VehicleConditionStatus.CRITICAL
      },

      indicators: {
        engine: false,
        battery: true,
        oil: 40,
        gas: 80,
      },

      assignedDrivers: null,

      events: this.eventsService.getRandomEvents(),
      currentEvent: this.eventsService.getRandomEvent(),
    }, {
      name: 'VB 4285',
      vin: 'WAUDFAFL6DN014563',
      model: 'model',
      color: 'blue',
      year: 2006,
      licensePlate: 'rie8he8hfren',
      type: VehicleType.VAN,
      status: VehicleStatus.ON_ROUTE,
      odometer: 1024,

      condition: {
        overview: 35,
        status: VehicleConditionStatus.CRITICAL
      },

      indicators: {
        engine: false,
        battery: true,
        oil: 40,
        gas: 80,
      },

      assignedDrivers: [{
        driver: this.driverService.getRandomDriver(),
        startDate: this.getIncrementedDate(18),
        endDate: this.getIncrementedDate(27),
      }],

      events: this.eventsService.getRandomEvents(),
      currentEvent: this.eventsService.getRandomEvent(),
    }, {
      name: 'CR 8565',
      vin: '1G1ZT51806F128009',
      model: 'model',
      color: 'blue',
      year: 2006,
      licensePlate: 'rie8he8hfren',
      type: VehicleType.TRUCK,
      status: VehicleStatus.ON_ROUTE,
      odometer: 1024,

      condition: {
        overview: 70,
        status: VehicleConditionStatus.GOOD
      },

      indicators: {
        engine: true,
        battery: true,
        oil: 70,
        gas: 80,
      },

      assignedDrivers: [{
        driver: this.driverService.getRandomDriver(),
        startDate: this.getIncrementedDate(12),
        endDate: this.getIncrementedDate(16),
      }, {
        driver: this.driverService.getRandomDriver(),
        startDate: this.getIncrementedDate(12),
        endDate: this.getIncrementedDate(16),
      },
      ],

      events: this.eventsService.getRandomEvents(),
      currentEvent: this.eventsService.getRandomEvent(),
    }, {
      name: 'CB 1865',
      vin: 'JH4DB1671NS000248',
      model: 'model',
      color: 'blue',
      year: 2010,
      licensePlate: 'ej5id9fjj32',
      type: VehicleType.VAN,
      status: VehicleStatus.ON_ROUTE,
      odometer: 5222,

      condition: {
        overview: 90,
        status: VehicleConditionStatus.GOOD
      },

      indicators: {
        engine: true,
        battery: true,
        oil: 90,
        gas: 80,
      },

      assignedDrivers: [{
        driver: this.driverService.getRandomDriver(),
        startDate: this.getIncrementedDate(12),
        endDate: this.getIncrementedDate(16),
      },
      ],

      events: this.eventsService.getRandomEvents(),
      currentEvent: this.eventsService.getRandomEvent(),
    }, {
      name: 'PS 7593',
      vin: '3VWDX7AJ5BM006256',
      model: 'model b',
      color: 'silver',
      year: 2016,
      licensePlate: 'rie8he8hfren',
      type: VehicleType.TRUCK,
      status: VehicleStatus.ON_ROUTE,
      odometer: 1024,

      condition: {
        overview: 75,
        status: VehicleConditionStatus.GOOD
      },

      indicators: {
        engine: true,
        battery: true,
        oil: 60,
        gas: 80,
      },

      assignedDrivers: [{
        driver: this.driverService.getRandomDriver(),
        startDate: this.getIncrementedDate(8),
        endDate: this.getIncrementedDate(11),
      }, {
        driver: this.driverService.getRandomDriver(),
        startDate: this.getIncrementedDate(8),
        endDate: this.getIncrementedDate(11),
      }],

      events: this.eventsService.getRandomEvents(),
      currentEvent: this.eventsService.getRandomEvent(),
    },
  ];

  private getIncrementedDate(day: number): Date {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + day);
    return currentDate;
  }

  getVehicles(): Vehicle[] {
    return this.data;
  }

  getOnRouteVehicles(): Vehicle[] {
    return this.data.filter((vehicle) => {
      return vehicle.status === VehicleStatus.ON_ROUTE;
    });
  }

  getAvailableVehicles(): Vehicle[] {
    return this.data.filter((vehicle) => {
      return vehicle.status === VehicleStatus.AVAILABLE;
    });
  }

  getOutOfServiceVehicles(): Vehicle[] {
    return this.data.filter((vehicle) => {
      return vehicle.status === VehicleStatus.OUT_OF_SERVICE;
    });
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomVehicle(): Vehicle {
    const index = this.getRandomInt(this.data.length);
    return this.data[index];
  }

  getVehicleByIndex(index: number): Vehicle {
    return this.data[index];
  }

  getAssignedVehicles(): Vehicle[] {
    return this.data.filter((vehicle) => {
      return !!vehicle.assignedDrivers;
    });
  }

  getNotAssignedVehicles(): Vehicle[] {
    return this.data.filter((vehicle) => {
      return !vehicle.assignedDrivers;
    });
  }
}
