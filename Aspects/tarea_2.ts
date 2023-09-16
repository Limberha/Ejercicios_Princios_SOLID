/*Tarea 2
Expandamos aún más nuestro sistema para incorporar una funcionalidad de membresía y categorización de libros.
Requisitos:
1.	Membresías de usuario:
•	Tres tipos de membresías: Básico, Premium y Platino.
•	Básico: Puede pedir prestado un máximo de 2 libros a la vez.
•	Premium: Puede pedir prestado un máximo de 5 libros a la vez.
•	Platino: Puede pedir prestado un número ilimitado de libros.
2.	Categorización de libros:
•	Los libros se categorizan en Ficción, No Ficción, y Referencia.
•	Los libros de Referencia no se pueden prestar. Son solo para leer en la biblioteca.
3.	Historial de préstamos:
•	Mantener un registro de todos los préstamos que ha hecho un usuario, independientemente de si el libro ha sido devuelto o no.*/

class User_a {
    public loanHistory: { book: Book; loanDate: Date; returnDate?: Date }[] = [];

    constructor(public UserId: string, public name: string, public membershipType: 'Básico' | 'Premium' | 'Platino') {}

    addLoanToHistory(book: Book, loanDate: Date, returnDate?: Date) {
        this.loanHistory.push({ book, loanDate, returnDate });
    }
}

class Book_a {
    public loanDate?: Date;
    public fine: number = 0;

    constructor(public title: string, public author: string, public isloaded: boolean = false, public isAvaible: string, public category: 'Ficción' | 'No Ficción' | 'Referencia') {}

    setLoanDate(date: Date) {
        this.loanDate = date;
    }
}

class Membership {
    static readonly Basic = 'Básico';
    static readonly Premium = 'Premium';
    static readonly Platinum = 'Platino';
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

class ConsoleLogger_a implements ILogger, IWarning, IError, IInfo {
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

class Library_a implements ILoadManager {
    
    private books: Book_a[] = [];
    private loadBooks: Map<string, { user: User, book: Book_a }> = new Map();

    constructor(private logger: ILogger, private warning: IWarning, private error: IError, private info: IInfo) {}
    
    loadBook(book: Book_a, user: User_a): void {
        if (book.isloaded) {
            this.error.logerror("El libro ya está prestado");
            return;
        }

        if (book.category === 'Referencia') {
            this.warning.logwarning("Los libros de referencia no se pueden prestar.");
            return;
        }

        const maxAllowedBooks = this.getMaxAllowedBooks(user.membershipType);
        if (this.getUserBorrowedBooks(user).length >= maxAllowedBooks) {
            this.warning.logwarning(`El usuario ha alcanzado el límite de préstamos (${maxAllowedBooks}).`);
            return;
        }

        book.setLoanDate(new Date()); 
        this.loadBooks.set(book.isAvaible, { user, book });
        book.isloaded = true;
        this.info.loginfo(`${user.name} ha tomado prestado ${book.title}.`);
        
        user.addLoanToHistory(book, new Date());
    }

    private getMaxAllowedBooks(membershipType: string): number {
        switch (membershipType) {
            case Membership.Basic:
                return 2;
            case Membership.Premium:
                return 5;
            case Membership.Platinum:
                return Infinity;
            default:
                return 0;
        }
    }

    private getUserBorrowedBooks(user: User_a): Book[] {
        return Array.from(this.loadBooks.values())
            .filter(info => info.user.UserId === user.UserId)
            .map(info => info.book);
    }

    returnBook(book: Book_a, user: User_a): void {
        const loanInfo = this.loadBooks.get(book.isAvaible);

        if (!loanInfo || loanInfo.user.UserId !== user.UserId) {
            this.error.logerror("El usuario no tiene este libro prestado");
            return;
        }

        const currentDate = new Date();
        const daysLate = Math.max(0, Math.floor((currentDate.getTime() - loanInfo.book.loanDate!.getTime()) / (1000 * 60 * 60 * 24)));
        book.fine = daysLate; // Generar multa
        this.loadBooks.delete(book.isAvaible);
        book.isloaded = false;
        this.info.loginfo(`${user.name} ha devuelto el libro.`);

        if (daysLate > 0) {
            this.warning.logwarning(`${user.name} tiene una multa de $${daysLate}.`);
        }
    }

    addBook(book: Book_a) {
        this.logger.logmensaje("Inicio de operación");
        this.books.push(book);
        this.logger.logmensaje("Fin de la operación");
    }

    findBookByTitle(title: string): Book_a | undefined {
        const book = this.books.find(book => book.title === title);
        if (book) {
            this.info.loginfo("Libro encontrado");
        } else {
            this.warning.logwarning("Libro no encontrado");
        }
        return book;
    }
}



const logger_a = new ConsoleLogger();
const library_a = new Library_a(logger, logger, logger, logger);

const user1 = new User_a("1", "Juan", Membership.Basic);
const user2 = new User_a("2", "Pedro", Membership.Premium);
const user3 = new User_a("3", "María", Membership.Platinum);

const book1 = new Book_a("Libro de Ficción", "Autor Ficticio", false, "123", "Ficción");
const book2 = new Book_a("Libro de No Ficción", "Autor No Ficticio", false, "124", "No Ficción");
const book3 = new Book_a("Libro de Referencia", "Autor de Referencia", false, "125", "Referencia");

library.loadBook(book1, user1);
library.loadBook(book2, user2);
library.loadBook(book3, user3);
