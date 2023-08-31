export class AppContoller {
  constructor(model) {
    this.model = model;
  }

  handleCreate(title) {
    return this.model.createTodo(title);
  }

  handleDelete(id) {
    return this.model.deleteTodo(id);
  }

  handleToggleTodo(id) {
    return this.model.toggleTodo(id);
  }
}
