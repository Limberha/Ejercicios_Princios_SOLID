//Example 1

class Luz {
    encender() {
        console.log("Luz encendida");
    }

    apagar() {
        console.log("Luz apagada");
    }
}

class Interruptor {
    private luz: Luz;

    constructor(luz: Luz) {
        this.luz = luz;
    }

    operar() {
        //...(alguna logica para determinar si encender o apagar )
        this.luz.encender(); //o this.luz.apagar();
    }
}

class Configuracion{
    constructor(public configuracion: string){}
}



class BaseDeDatos {
    guardar(configuracion: Configuracion) {
        console.log(`Guardando configuracion con valor: $(configuracion.valor) en la base de datos`);
    }

    obtener(): Configuracion {
        //Obtener de la BD...
        return new Configuracion("valor");
    }
}

class GestorConfiguraciones {
    db: BaseDeDatos;

    constructor() {
        this.db = new BaseDeDatos();
    }

    guardarConfiguracion(valor: string) {
        const configuracion = new Configuracion(valor);
        this.db.guardar(configuracion);
    }

    obtenerConfiguracion(): Configuracion {
        return this.db.obtener();
    }
}





//////////////////////////////////////////////
//Aplicando Dependency Inversion
//////////////////////////////////////////////


interface DispositivoElectrico {
    encender(): void;
    apagar(): void;
}

class Luz_1 implements DispositivoElectrico {
    encender() {
        console.log("Luz encendida");
    }

    apagar() {
        console.log("Luz apagada");
    }
}

class Interruptor_1 {
    private dispositivo: DispositivoElectrico;

    constructor(dispositivo: DispositivoElectrico) {
        this.dispositivo = dispositivo;
    }

    operar() {
        var sw = 0;
        if (sw == 1) {
            this.dispositivo.encender();
        } else {
            this.dispositivo.apagar();
        }
    }
}

// Uso del código
const luz = new Luz_1();
const interruptor = new Interruptor_1(luz);

interruptor.operar(); 
