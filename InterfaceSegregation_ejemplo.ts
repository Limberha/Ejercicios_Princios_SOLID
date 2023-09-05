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




//////////////////////////////////////////////
//Aplicando InterfaceSegregation
//////////////////////////////////////////////

interface ReproductorMusica {
    reproducirMusica(): void;
}

interface ReproductorVideo {
    reproducirVideo(): void;
}

interface LectorEbook {
    leerEbook(): void;
}

class Smartphone_1 implements ReproductorMusica, ReproductorVideo, LectorEbook {
    reproducirMusica() {
        console.log("Reproduciendo música en el smartphone");
    }

    reproducirVideo() {
        console.log("Reproduciendo video en el smartphone");
    }

    leerEbook() {
        console.log("Leyendo eBook en el smartphone");
    }
}

class ReproductorMP3_1 implements ReproductorMusica {
    reproducirMusica() {
        console.log("Reproduciendo música en el reproductor MP3");
    }
}


//////////////////////////////////////////////
//////////////////////////////////////////////

interface Terrestre {
    caminar(): void;
    hacerSonido(): void;
}

interface Acuatico {
    nadar(): void;
    hacerSonido(): void;
}

interface Aereo {
    volar(): void;
    hacerSonido(): void;
}

class Aguila_1 implements Aereo {
    volar() {
        console.log("El águila vuela alto en el cielo");
    }

    hacerSonido() {
        console.log("El águila emite un sonido agudo");
    }
}

class Tiburon_1 implements Acuatico {
    nadar() {
        console.log("El tiburón nada rápidamente");
    }

    hacerSonido() {
        console.log("El tiburón no hace sonidos audibles fuera del agua");
    }
}

class Gato implements Terrestre {
    caminar() {
        console.log("El gato camina sigilosamente");
    }

    hacerSonido() {
        console.log("El gato hace un ruido de maullido");
    }
}

