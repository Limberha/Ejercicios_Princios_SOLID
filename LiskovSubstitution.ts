//example1

class Pajaro {
    volar() {
        console.log("El pajaro vuwla en el cielo");
    }
}

class Pinguino extends Pajaro {
    volar() {
        throw new Error("Los pinguinos no pueden volar")
    }
}





//example2
class Recatangulo {
    alto: number;
    ancho: number;

    constructor(alto: number, ancho: number) {
        this.alto = alto;
        this.ancho = ancho;
    }

    setAlto(value: number) {
        this.alto = value;
    }

    setAncho(value: number) {
        this.ancho = value;
    }
    area(): number {
        return this.alto = this.ancho;
    }
}





class Cuadrado extends Recatangulo {
    constructor(lado: number) {
        super(lado, lado)
    }

    setAlto(value: number) {
        this.alto = value;
        this.ancho = value;
    }
    setAncho(value: number) {
        this.ancho = value;
        this.alto = value
    }
}