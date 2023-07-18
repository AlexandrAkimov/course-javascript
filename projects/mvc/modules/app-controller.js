export class AppController {
  constructor(model) {
    this.model = model;
  }

  handleCreate(title) {
    return this.model.createTodo(title);
  }

  handleDelete(id) {
    return this.model.deleteTodo(id);
  }

  handleToggle(id) {
    return this.model.toggleTodo(id);
  }
}
