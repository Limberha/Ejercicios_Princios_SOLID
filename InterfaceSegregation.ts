//Crear un programa que nos perminta mostrar libros de una biblioteca, 
//actualizar el nombre del libro.
//Crear un libro
//Eliminarlo

//libros fisicos
//Audio Libros
//Libros digitales
//Libros de hace 100 años

//combinaciones
//no se puede eliminar audiolibros
//no se puede actualizar, ni eliminar libros antiguos
//quiero que al crear libros libros fisicos, y libros digitales me pida diferentes autores

interface IEliminarLibro {
    eliminar();
}

interface IActualizarNombreLibro {
    actualizar();
}

interface ICrearLibro {
    crearlibro();
}

interface IAgregarAutores{
    agregarautores(autor : string[]);
}

class Biblioteca {
    titulo: string;
    autor: string[];
    antiguedad: string;
    tipo: string;

    constructor(titulo: string, autor: string[], antiguedad: string, tipo: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.antiguedad = antiguedad;
        this.tipo = tipo;
    }
}

class AudioLibro implements IActualizarNombreLibro, ICrearLibro{
    crearlibro() {
        throw new Error("Method not implemented.")
    }
    actualizar() {
        throw new Error("Method not implemented.")
    }
}

class LibroAntiguo implements ICrearLibro{
    crearlibro() {
        throw new Error("Method not implemented.")
    }
}

class LibroFisico implements ICrearLibro,IActualizarNombreLibro,IEliminarLibro,IAgregarAutores{
    crearlibro() {
        throw new Error("Method not implemented.")
    }
    actualizar() {
        throw new Error("Method not implemented.")
    }
    eliminar() {
        throw new Error("Method not implemented.")
    }
    agregarautores(autor: string[]) {
        throw new Error("Method not implemented.")
    }
}

class LibroDigital implements ICrearLibro,IActualizarNombreLibro,IEliminarLibro,IAgregarAutores{
    crearlibro() {
        throw new Error("Method not implemented.")
    }
    actualizar() {
        throw new Error("Method not implemented.")
    }
    eliminar() {
        throw new Error("Method not implemented.")
    }
    agregarautores(autor: string[]) {
        throw new Error("Method not implemented.")
    }
}