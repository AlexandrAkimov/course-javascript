export class Employee {
  type = 'Employee';
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.id = Date.now().toString();
  }

  getInfo() {
    alert(
      `Имя сотрудника: ${this.name}, Должность ${this.position}, Зарплата ${this.salary}`
    );
  }
}
