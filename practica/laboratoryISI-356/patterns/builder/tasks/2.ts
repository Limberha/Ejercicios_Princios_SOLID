class Vehicle {
    type: string;
    engine: string;
    wheels: number;
    color: string;
    brand: string;
    fuel: string;

    constructor(type: string, engine: string, wheels: number, color: string, brand: string, fuel: string) {
        this.type = type;
        this.engine = engine;
        this.wheels = wheels;
        this.color = color;
        this.brand = brand;
        this.fuel = fuel;
    }
}

const myCar = new Vehicle('car', 'V8', 4, 'red', 'Ford', 'gasoline');


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


interface VehicleParams_ {
    type: string;
    engine: string;
    wheels: number;
    color: string;
    brand: string;
    fuel: string;
}

class Vehicle_ {
    type: string;
    engine: string;
    wheels: number;
    color: string;
    brand: string;
    fuel: string;

    constructor(params: VehicleParams_) {
        this.type = params.type;
        this.engine = params.engine;
        this.wheels = params.wheels;
        this.color = params.color;
        this.brand = params.brand;
        this.fuel = params.fuel;
    }
}

class VehicleBuilder_ {
    private params: VehicleParams_;

    constructor() {
        this.params = {
            type: '',
            engine: '',
            wheels: 0,
            color: '',
            brand: '',
            fuel: ''
        };
    }

    setType(type: string) {
        this.params.type = type;
        return this;
    }

    setEngine(engine: string) {
        this.params.engine = engine;
        return this;
    }

    setWheels(wheels: number) {
        this.params.wheels = wheels;
        return this;
    }

    setColor(color: string) {
        this.params.color = color;
        return this;
    }

    setBrand(brand: string) {
        this.params.brand = brand;
        return this;
    }

    setFuel(fuel: string) {
        this.params.fuel = fuel;
        return this;
    }

    build() {
        return new Vehicle_(this.params);
    }
}

const myCar_ = new VehicleBuilder_()
    .setType('car')
    .setEngine('V8')
    .setWheels(4)
    .setColor('red')
    .setBrand('Ford')
    .setFuel('gasoline')
    .build();
