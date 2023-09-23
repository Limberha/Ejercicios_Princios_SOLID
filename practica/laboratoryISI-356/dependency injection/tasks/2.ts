class BikeDelivery {
    deliverPackage(packageId: string, address: string) {
        console.log(`Delivering package ${packageId} to ${address} using a bike.`);
    }
}

class PackageService {
    deliveryMethod: BikeDelivery;

    constructor() {
        this.deliveryMethod = new BikeDelivery();
    }

    sendPackage(packageId: string, address: string) {
        this.deliveryMethod.deliverPackage(packageId, address);
    }
}


////////////////////////////////////////////////
////////////////////////////////////////////////

interface DeliveryMethod {
    deliverPackage(packageId: string, address: string): void;
}

class BikeDelivery_ implements DeliveryMethod {
    deliverPackage(packageId: string, address: string) {
        console.log(`Delivering package ${packageId} to ${address} using a bike.`);
    }
}

class PackageService_ {
    deliveryMethod: DeliveryMethod;

    constructor(deliveryMethod: DeliveryMethod) {
        this.deliveryMethod = deliveryMethod;
    }

    sendPackage(packageId: string, address: string) {
        this.deliveryMethod.deliverPackage(packageId, address);
    }
}

const bikeDelivery = new BikeDelivery();
const packageService = new PackageService_(bikeDelivery);

packageService.sendPackage("123", "123 Main Street");
