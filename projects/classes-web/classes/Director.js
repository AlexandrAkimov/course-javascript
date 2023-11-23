import { Manager } from './Manager';

export class Director extends Manager {
  type = 'Director';
  constructor(name, position, salary, department) {
    super(name, position, salary);
    this.department = department;
  }
}
