export class AppView {
  form = null;
  todosContainer = null;
  todosInput = null;
  createButton = null;

  constructor(root, controller) {
    this.root = root;
    this.controller = controller;
    this.createTodoForm();
    this.createTodosList();
    this.bindListeners();
  }

  onCreateClick = () => {
    const createdTodos = this.controller.handleCreate(this.todosInput.value);

    this.renderTodos(createdTodos);
  };

  onDeleteClick = (id) => {
    const updateTodos = this.controller.handleDelete(id);

    this.renderTodos(updateTodos);
  };

  onToggleStatus = (id) => {
    const updateTodos = this.controller.handleToggleTodo(id);

    this.renderTodos(updateTodos);
  };

  getTodoElement(todo) {
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
      return this.getTodoElement(todo);
    });

    this.todosContainer.innerHTML = todosElements.join('');
  }

  createTodosList() {
    this.todosContainer = document.createElement('div');
  }

  bindListeners() {
    this.createButton.addEventListener('click', this.onCreateClick);
    this.todosContainer.addEventListener('click', (e) => {
      const role = e.target.getAttribute('data-role');
      const id = e.target.getAttribute('data-id');

      if (role === 'delete') {
        this.onDeleteClick(id);
      }

      if (role === 'status') {
        this.onToggleStatus(id);
      }
    });
  }

  createTodoForm() {
    this.form = document.createElement('div');
    this.todosInput = document.createElement('input');
    this.todosInput.placeholder = 'Что нужно сделать?';
    this.createButton = document.createElement('button');
    this.createButton.innerText = 'Создать';

    this.form.appendChild(this.todosInput);
    this.form.appendChild(this.createButton);
  }

  mount() {
    this.root.innerHTML = '<h1>Список дел: </h1>';
    this.root.appendChild(this.form);
    this.root.appendChild(this.todosContainer);
  }
}
