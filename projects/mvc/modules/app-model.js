export class AppModel {
  constructor() {
    this.todos = [];
  }

  async fetchTodos() {
    try {
      return this.todos;
    } catch (error) {
      return [];
    }
  }

  createTodo(title) {
    const todo = {
      id: String(Math.random()),
      title,
      done: false,
      createdAt: Date.now().toString(),
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
