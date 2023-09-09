// Mostrar en un log de info toda la informacion del usuario que se esta prestando un libro 
// mostrar en un log de info toda informacion del usuario que esta retornadno un libro
// tip debe mostrar el objeto comppleto del usuario 



class Book {
    constructor(public title: string, public author: string, public isloaded: boolean = false, public isAvaible: string) {

    }
}

class User {
    constructor(public UserId: string, public name: string) {

    }
}


interface ILoadManager {
    loadBook(book: Book, user: User): void;
    returnBook(book: Book): void;
}


interface ILogger {
    logmensaje(mensage: string): void;
}


interface IWarning {
    logwarning(warning: string): void;
}

interface IError {
    logerror(error: string): void;
}

interface IInfo {
    loginfo(info: string): void;
}


class ConsoleLogger implements ILogger, IWarning, IError, IInfo {
    logmensaje(mensage: string): void {
        console.log(mensage);
    }
    logwarning(warning: string): void {
        console.log(warning);
    }
    logerror(error: string): void {
        console.log(error);
    }
    loginfo(info: string): void {
        console.log(info);
    }
}

class Library implements ILoadManager {
    private books: Book[] = [];
    private loadBooks: Map<string, User> = new Map();
    constructor(private logger: ILogger, private warning: IWarning, private error: IError, private info: IInfo) { }

    loadBook(book: Book, user: User): void {
        if (book.isloaded) {
            this.logger.logmensaje("Book in loaded");
            return;
        }
        this.loadBooks.set(book.isAvaible, user);
        book.isloaded = true;
        this.logger.logmensaje(`$(user.name) has borrowed $(book.title).`);

    };
    returnBook(book: Book) {
        if (!book.isloaded) {
            this.logger.logmensaje("Book in not loaded");
            return;
        }

        this.loadBooks.delete(book.isAvaible);
        book.isloaded = false;
        this.logger.logmensaje(`$(user.name) has been returned.`);
    }
    addBook(book: Book) {
        this.logger.logmensaje("inicio de operacion");
        this.books.push(book);
        this.logger.logmensaje("Fin de la operacion");
    }

    findBookeError(title: string): Book | undefined {
        if (book => book.title === title) {
            this.info.loginfo("Libro encontrado")
            return this.books.find(book => book.title === title);

        } else {
            this.error.logerror("Libro no encontrado")
        }
    }

    findBookByTitle(title: string): void {
        if (book => book.title !== title) {
            this.warning.logwarning("libro no encontrado")
                ;
        }
    }
}

// Uso del codigo

// const logger = new ConsoleLogger();
// const library = new Library(logger);
// const book1 = new BooK('libro1', 'autor1');

// library.addBook(book1);
// library.findBookByTitle('libro1';)




// crear interfaces para logs de Error, Warning, e info
// Crear un metodo con una logica para validar si un libro tiene el titulo correcto
// Si no la tiene, mostrar un mensaje de error en log si tiene el mismo nombre
// mostrar un mensje de info
// modificar el metodo find para que retorne un warning cuando no encuentre el libro