class Cinema {
    movies: any[] = [];
    snacks: any[] = [];
    tickets: any[] = [];
    employees: any[] = [];

    // Métodos relacionados con películas
    addMovie(movie: any) {
        this.movies.push(movie);
    }

    // Métodos relacionados con snacks
    buySnack(snack: any) {
        this.snacks.push(snack);
    }

    // Métodos relacionados con entradas
    buyTicket(ticket: any) {
        this.tickets.push(ticket);
    }

    // Métodos relacionados con empleados
    hireEmployee(employee: any) {
        this.employees.push(employee);
    }
}


////////////////////////////////////////////////////
////////////////////////////////////////////////////


class Movie {
}

class Snack {
}

class Ticket {
}

class Employee {
}

class Cinema_ {
    movies: Movie[] = [];
    snacks: Snack[] = [];
    tickets: Ticket[] = [];
    employees: Employee[] = [];

    // Métodos relacionados con películas
    addMovie(movie: Movie) {
        this.movies.push(movie);
    }

    // Métodos relacionados con snacks
    buySnack(snack: Snack) {
        this.snacks.push(snack);
    }

    // Métodos relacionados con entradas
    buyTicket(ticket: Ticket) {
        this.tickets.push(ticket);
    }

    // Métodos relacionados con empleados
    hireEmployee(employee: Employee) {
        this.employees.push(employee);
    }
}
