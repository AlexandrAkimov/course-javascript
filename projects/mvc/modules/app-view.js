export class AppView {
  form = null;
  todosContainer = null;
  todoInput = null;
  createButton = null;
  constructor(root, controller) {
    this.root = root;
    this.controller = controller;
    this.createTodosForm();
    this.createTodosList();
    this.bindListeners();
  }

  onCreateClick = () => {
    const createdTodos = this.controller.handleCreate(this.todoInput.value);
    this.renderTodos(createdTodos);
  };

  onDeleteClick = (id) => {
    const deletedTodos = this.controller.handleDelete(id);
    this.renderTodos(deletedTodos);
  };

  onToggleClick = (id) => {
    const updatedTodos = this.controller.handleToggle(id);
    console.log(updatedTodos);
    this.renderTodos(updatedTodos);
  };

  bindListeners() {
    this.createButton.addEventListener('click', this.onCreateClick);

    this.todosContainer.addEventListener('click', (e) => {
      const role = e.target.getAttribute('data-role');
      const id = e.target.getAttribute('data-id');

      if (role === 'delete') {
        this.onDeleteClick(id);
      }

      if (role === 'status') {
        this.onToggleClick(id);
      }
    });
  }

  getTodoElementHTML(todo) {
    return `
      <div class="todo">
        <button 
          class="${todo.done ? 'red' : 'green'}"
          data-role="status" 
          data-id="${todo.id}">
            ${todo.done ? '+' : '-'}
        </button>
        <span>${todo.title}</span>
        <button data-role="delete" data-id="${todo.id}">Удалить</button>
      </div>
    `;
  }

  renderTodos(todos) {
    this.todosContainer.innerHTML = '';

    const todosElements = todos.map((todo) => {
      return this.getTodoElementHTML(todo);
    });

    this.todosContainer.innerHTML = todosElements.join('');
  }

  createTodosList() {
    this.todosContainer = document.createElement('div');
  }

  createTodosForm() {
    this.form = document.createElement('div');
    this.todoInput = document.createElement('input');
    this.todoInput.placeholder = 'Что нужно сделать';
    this.createButton = document.createElement('button');
    this.createButton.innerText = 'Создать';
    this.form.appendChild(this.todoInput);
    this.form.appendChild(this.createButton);
  }

  mount() {
    this.root.innerHTML = '<h1>Список дел</h1>';
    this.root.appendChild(this.form);
    this.root.appendChild(this.todosContainer);
  }
}
