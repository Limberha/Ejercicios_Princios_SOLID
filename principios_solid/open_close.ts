class Libro3{
    titulo: string;
    autor: string;
    contenido: string;
    tipo: string;

    constructor(titulo:string, autor: string, contenido: string, tipo: string){
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
        this.tipo = tipo;
    }
    
    mostrarDescripcion(){
        if(this.tipo === 'texto'){
            return `libro de texto titulado " ${this.titulo}" escrito por ${this.autor}`
        }
    }
    
}


//////////////////////////////////////////////
//Aplicando Abierto Cerrado
//////////////////////////////////////////////

class Libro_3 {
    titulo: string;
    autor: string;
    contenido: string;
    tipo: string;

    constructor(titulo: string, autor: string, contenido: string, tipo: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
        this.tipo = tipo;
    }

    mostrarDescripcion(): string {
        return '';
    }
}

class LibroTexto extends Libro_3 {
    mostrarDescripcion(): string {
        return `Libro de texto titulado "${this.titulo}" escrito por ${this.autor}`;
    }
}

class LibroNovela extends Libro_3 {
    mostrarDescripcion(): string {
        return `Novela titulada "${this.titulo}" escrita por ${this.autor}`;
    }
}

const libroTexto = new LibroTexto('Matemáticas Avanzadas', 'Profesor Ejemplo', 'Contenido de matemáticas', 'texto');
const libroNovela = new LibroNovela('La Aventura Épica', 'Autor Famoso', 'Contenido de aventuras', 'novela');

console.log(libroTexto.mostrarDescripcion());
console.log(libroNovela.mostrarDescripcion());
