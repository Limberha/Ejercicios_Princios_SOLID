//example1

class Pajaro {
    volar() {
        console.log("El pajaro vuela en el cielo");
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


//////////////////////////////////////////////
//Aplicando LiskovSubstitution
//////////////////////////////////////////////




class Pajaro_1 {
    volar() {
        console.log("El pájaro vuela en el cielo");
    }
}

class Pinguino_1 extends Pajaro_1 {
    volar() {
        throw new Error("Los pinguinos no pueden volar")
    }
}

const pajaroComun = new Pajaro_1();
const pingüinoEmperador = new Pinguino_1();

pajaroComun.volar(); 
pingüinoEmperador.volar(); 


//////////////////////////////////////////////
//////////////////////////////////////////////

class Figura {
    area(): number {
        return 0;
    }
}

class Rectangulo_1 extends Figura {
    alto: number;
    ancho: number;

    constructor(alto: number, ancho: number) {
        super();
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
        return this.alto * this.ancho;
    }
}

class Cuadrado_1 extends Figura {
    lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    setLado(value: number) {
        this.lado = value;
    }

    area(): number {
        return this.lado * this.lado;
    }
}



//////////////////////////////////////////////
//////////////////////////////////////////////