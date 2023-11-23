import { Employee } from './Employee';

export class Manager extends Employee {
  type = 'Manager';
  constructor(name, position, salary) {
    super(name, position, salary);

    this.listEmployees = [];
  }

  getInfoEmployees() {
    console.log(this.listEmployees);
  }

  hireEmployee(employee) {
    this.listEmployees = [...this.listEmployees, employee];
    console.log(`Менеджер ${this.name} нанял(а) сотрудника ${employee.name}`);
  }

  fireEmployee(employee) {
    this.listEmployees = this.listEmployees.filter((emp) => emp.name !== employee.name);
    console.log(`Менеджер ${this.name} уволил(а) сотрудника ${employee.name}`);
  }
}
