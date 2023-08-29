class Amimal{
    nombre: string;
    raza: string;

    constructor(nombre:string, raza: string){
        this.nombre = nombre;
        this.raza = raza;
    }

    comer(){
        console.log("comer");
    }

    nadar(){
        console.log("nadar");
    }
}

class Jirafa extends Amimal{
    constructor(nombre: string , raza: string){
        super(nombre, raza);
    }

    comer():string{
        return "";
    }
}



//////////////////////////////////////////////
//Aplicando Liskov
//////////////////////////////////////////////

interface IAnimal{
    comer();
    
}

interface IAnimalAquatico {
    nadar();
}

interface IAnimalSubterraneo{
    cavar();
}

class Jirafa2 implements IAnimal{
    comer() {
        throw new Error("Method not implemented.")
    }
}

class Pato2 implements IAnimalAquatico, IAnimal{
    comer() {
        throw new Error("Method not implemented.")
    }
    nadar() {
        throw new Error("Method not implemented.")
    }
}

class Topo implements IAnimalSubterraneo, IAnimalAquatico{

    nadar() {
        throw new Error("Method not implemented.")
    }
    cavar() {
        throw new Error("Method not implemented.")
    }

}