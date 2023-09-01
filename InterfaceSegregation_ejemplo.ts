//Example1
interface DispositivoMultimedia {
    reproducirMusica(): void;
    reproducirVIdeo(): void;
    leerEbook(): void;
}
class Smartphone implements DispositivoMultimedia {
    reproducirMusica() {
        console.log("Reproduciendo música en el smartphone");
    }

    reproducirVIdeo() {
        console.log("Reproduciendo video en el smartphone");
    }

    leerEbook() {
        console.log("leyendo eBook en el smartphone");
    }
}




class ReproductorMP3 implements DispositivoMultimedia {
    reproducirMusica() {
        console.log("Reproduciendo música en el smartphone");
    }

    reproducirVIdeo() {
        throw new Error("Esta funcionalidad no esta soportada");
    }

    leerEbook() {
        throw new Error("Esta funcionalidad no esta soportada");
    }
}



//Example 2

interface Animal {
    caminar(): void;
    nadar(): void;
    volar(): void;
    hacerSonido(): void;
}

class Aguila implements Animal {
    caminar() {
        console.log("El aguila camina lentamente");
    }

    nadar() {
        throw new Error("El aguila no puede nadar");
    }

    volar() {
        console.log("El aguila vuela alto en el cielo");
    }

    hacerSonido() {
        console.log("El aguila emite un sonido agudo");
    }
}

class Tiburon implements Animal {
    caminar() {
        throw new Error("El tiburon no puede caminar")
    }

    nadar() {
        console.log("El tiburon nada rapidamente");
    }

    volar() {
        throw new Error("El tiburon no puede volar")
    }

    hacerSonido() {
        console.log("El tiburon no hace sonidos audibles fuera del agua");
    }
}