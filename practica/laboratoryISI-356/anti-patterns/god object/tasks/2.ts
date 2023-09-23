class AirportSystem {
    flights: any[] = [];
    passengers: any[] = [];
    crews: any[] = [];
    planesMaintenance: any[] = [];
    financialRecords: any[] = [];

    // Métodos relacionados con vuelos
    scheduleFlight(flight: any) {
        this.flights.push(flight);
    }

    // Métodos relacionados con pasajeros
    checkInPassenger(passenger: any) {
        this.passengers.push(passenger);
    }

    // Métodos relacionados con tripulaciones
    assignCrewToFlight(crew: any, flightID: string) {
        this.crews.push({...crew, flightID});
    }

    // Métodos relacionados con el mantenimiento de aviones
    logMaintenance(planeID: string, maintenance: any) {
        this.planesMaintenance.push({planeID, ...maintenance});
    }

    // Métodos relacionados con facturación y contabilidad
    recordFinancialTransaction(transaction: any) {
        this.financialRecords.push(transaction);
    }
}



////////////////////////////////////////////////////
////////////////////////////////////////////////////

//Res Un

class Flight {
    id: string;

    constructor(id: string) {
        this.id = id;
    }
}

class Passenger {
}

class Crew {
    flightID: string;

    constructor(flightID: string) {
        this.flightID = flightID;
    }
}

class PlaneMaintenance {
    planeID: string;

    constructor(planeID: string) {
        this.planeID = planeID;
    }
}

class FinancialRecord {
}

class AirportSystem_ {
    flights: Flight[] = [];
    passengers: Passenger[] = [];
    crews: Crew[] = [];
    planesMaintenance: PlaneMaintenance[] = [];
    financialRecords: FinancialRecord[] = [];

    // Métodos relacionados con vuelos
    scheduleFlight(flight: Flight) {
        this.flights.push(flight);
    }

    // Métodos relacionados con pasajeros
    checkInPassenger(passenger: Passenger) {
        this.passengers.push(passenger);
    }

    // Métodos relacionados con tripulaciones
    assignCrewToFlight(crew: Crew) {
        this.crews.push(crew);
    }

    // Métodos relacionados con el mantenimiento de aviones
    logMaintenance(maintenance: PlaneMaintenance) {
        this.planesMaintenance.push(maintenance);
    }

    // Métodos relacionados con facturación y contabilidad
    recordFinancialTransaction(transaction: FinancialRecord) {
        this.financialRecords.push(transaction);
    }
}
