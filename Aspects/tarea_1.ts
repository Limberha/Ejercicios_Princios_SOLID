/*Tarea 1 /Problema:
Supongamos que queremos expandir nuestro sistema para gestionar multas para aquellos usuarios que no devuelvan los libros a tiempo. Cada libro que se pase de la fecha de devolución generará una multa diaria.
Requisitos:
1.	Cada libro tiene un tiempo de préstamo estándar de 7 días.
2.	Una vez que un libro se presta, se debe registrar la fecha de préstamo.
3.	Cuando un libro es devuelto, el sistema debe calcular si se ha pasado del tiempo estándar y, si es así, determinar cuántos días se ha pasado.
4.	Por cada día de retraso, se debe generar una multa de $1.*/

class Book_ {
    public loanDate?: Date;
    public fine: number = 0;

    constructor(public title: string, public author: string, public isloaded: boolean = false, public isAvaible: string) {}

    setLoanDate(date: Date) {
        this.loanDate = date;
    }
}

class User_ {
    constructor(public UserId: string, public name: string) {}
}

interface ILoadManager {
    loadBook(book: Book_, user: User_): void;
    returnBook(book: Book_, user: User_): void;
}

interface ILogger {
    logmensaje(mensaje: string): void;
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

class ConsoleLogger_ implements ILogger, IWarning, IError, IInfo {
    logmensaje(mensaje: string): void {
        console.log(mensaje);
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

class Library_ implements ILoadManager {

    private books: Book_[] = [];
    private loadBooks: Map<string, { user: User, book: Book_ }> = new Map();

    constructor(private logger: ILogger, private warning: IWarning, private error: IError, private info: IInfo) {}

    loadBook(book: Book_, user: User): void {
        if (book.isloaded) {
            this.error.logerror("El libro ya está prestado");
            return;
        }

        book.setLoanDate(new Date()); 
        this.loadBooks.set(book.isAvaible, { user, book });
        book.isloaded = true;
        this.info.loginfo(`${user.name} ha tomado prestado ${book.title}.`);
    }

    returnBook(book: Book_, user: User): void {
        const loanInfo = this.loadBooks.get(book.isAvaible);

        if (!loanInfo || loanInfo.user.UserId !== user.UserId) {
            this.error.logerror("El usuario no tiene este libro prestado");
            return;
        }

        const currentDate = new Date();
        const daysLate = Math.max(0, Math.floor((currentDate.getTime() - loanInfo.book.loanDate!.getTime()) / (1000 * 60 * 60 * 24)));
        book.fine = daysLate; 
        this.loadBooks.delete(book.isAvaible);
        book.isloaded = false;
        this.info.loginfo(`${user.name} ha devuelto el libro.`);

        if (daysLate > 0) {
            this.warning.logwarning(`${user.name} tiene una multa de $${daysLate}.`);
        }
    }

    addBook(book: Book) {
        this.logger.logmensaje("Inicio de operación");
        this.books.push(book);
        this.logger.logmensaje("Fin de la operación");
    }

    findBookByTitle(title: string): Book | undefined {
        const book = this.books.find(book => book.title === title);
        if (book) {
            this.info.loginfo("Libro encontrado");
        } else {
            this.warning.logwarning("Libro no encontrado");
        }
        return book;
    }
}

const logger_ = new ConsoleLogger();
const library_ = new Librarya(logger, logger, logger, logger);

const user_ = new User("1", "Juan");
const book_ = new Book("Mi Libro", "Autor Desconocido", false, "123");

library.loadBook(book, user);
library.returnBook(book, user);
library.findBookByTitle("Mi Libro");

