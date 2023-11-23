import { Director } from './classes/Director';
import { Employee } from './classes/Employee';
import { Manager } from './classes/Manager';
import './index.html';

const form = document.getElementById('form');
const employeesContainer = document.getElementById('employees_container');

const allEmployyes = [];

const employees = {
  special: Employee,
  manager: Manager,
  director: Director,
};

function renderEmployees() {
  employeesContainer.innerHTML = '';

  for (const employee of allEmployyes) {
    employeesContainer.innerHTML += `
    <div class="emp">
      <span>${employee.name}<span>
      <span>${employee.salary}<span>
      <span>${employee.position}<span>
      <span>${employee.type}<span>
      <button data-role="detail" data-id="${employee.id}">Показать детали</button>
    <div>
  `;
  }
}

employeesContainer.addEventListener('click', (e) => {
  const role = e.target.getAttribute('data-role');
  const id = e.target.getAttribute('data-id');

  const targetEmployee = allEmployyes.find((emp) => emp.id === id);
  if (role === 'detail') {
    targetEmployee.getInfo();
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const {
    name: { value: nameValue },
    salary: { value: salaryValue },
    position: { value: positionValue },
    type: { value: typeValue },
  } = this.elements;

  const employee = new employees[typeValue](nameValue, positionValue, salaryValue);

  allEmployyes.push(employee);

  renderEmployees();
});
