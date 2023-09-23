class TodoManager {
    private todos: string[] = [];

    add(todo: string) {
        this.todos.push(todo);
        this.save();
        this.render();
    }

    remove(index: number) {
        this.todos.splice(index, 1);
        this.save();
        this.render();
    }

    private save() {
        console.log("Saving todos to local storage...");
        // Código para guardar todos en el almacenamiento local
    }

    private render() {
        console.log("Rendering todos in the UI...");
        // Código para renderizar todos en la UI
    }
}


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////



class Todo {
    private todos: string[] = [];

    add(todo: string) {
        this.todos.push(todo);
    }

    remove(index: number) {
        this.todos.splice(index, 1);
    }

    getTodos() {
        return this.todos;
    }
}

class LocalStorageManager {
    saveTodos(todos: string[]) {
        console.log("Saving todos to local storage...");
    }
}

class UIManager {
    renderTodos(todos: string[]) {
        console.log("Rendering todos in the UI...");
    }
}

class TodoManager_ {
    private todo: Todo = new Todo();
    private localStorageManager: LocalStorageManager = new LocalStorageManager();
    private uiManager: UIManager = new UIManager();

    add(todo: string) {
        this.todo.add(todo);
        this.localStorageManager.saveTodos(this.todo.getTodos());
        this.uiManager.renderTodos(this.todo.getTodos());
    }

    remove(index: number) {
        this.todo.remove(index);
        this.localStorageManager.saveTodos(this.todo.getTodos());
        this.uiManager.renderTodos(this.todo.getTodos());
    }
}
