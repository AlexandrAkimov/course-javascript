export class AppModel {
  constructor() {
    this.todos = [];
  }

  async fetchTodos() {
    try {
      return this.todos;
    } catch (e) {
      this.todos = [];
      return this.todos();
    }
  }

  createTodo(title) {
    const todo = {
      id: String(Date.now()),
      title,
      done: false,
      createdAt: new Date(),
    };

    this.todos.push(todo);
    return this.todos;
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    return this.todos;
  }

  toggleTodo(id) {
    this.todos = this.todos.map((todo) => ({
      ...todo,
      done: todo.id === id ? !todo.done : todo.done,
    }));

    return this.todos;
  }
}
