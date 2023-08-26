class Libro1{
    titulo: string;
    autor: string;
    contenido: string;

    constructor(titulo:string, autor: string, contenido: string){
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
    }
    
    mostrarContenido(){
        return this.contenido;
    }

    guardarEnBaseDeDatos(){
        //Codigo para guardar el libro en la base de datos 
        console.log(`Guardando el libro ${this.titulo} en la base de datos...`);
    }
}
const libro1 = new Libro1('El principito', 'Antonie de Saint-Exupéry', 'Érase una vez...');
libro1.guardarEnBaseDeDatos();

//////////////////////////////////////////////
//Aplicando Responsabilidad unica
//////////////////////////////////////////////

class Libro {
    titulo: string;
    autor: string;
    contenido: string;

    constructor(titulo: string, autor: string, contenido: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
    }

    mostrarContenido() {
        return this.contenido;
    }
}

class LibroRepository {
    guardarEnBaseDeDatos(libro: Libro) {
        // Código para guardar el libro en la base de datos
        console.log(`Guardando el libro ${libro.titulo} en la base de datos...`);
    }
}

const libro = new Libro('El principito', 'Antoine de Saint-Exupéry', 'Érase una vez...');

const libroRepository = new LibroRepository();
libroRepository.guardarEnBaseDeDatos(libro);
