import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

require('bootstrap');
require('bootstrap-icons/font/bootstrap-icons.css');

const tasks = [
  {
    description: 'Description',
    completed: false,
    index: 1,
  },
  {
    description: 'Description 1',
    completed: false,
    index: 2,
  },
  {
    description: 'Description 2',
    completed: true,
    index: 3,
  },
];
const container = document.getElementById('container');
const populateTasks = (arr) => {
  const list = document.createElement('ul');
  const listItem = document.createElement('li');
  const itemCotent = document.createElement('div');
  const btnClear = document.createElement('button');
  btnClear.setAttribute('type', 'button');
  btnClear.setAttribute('id', 'btn_clear');
  btnClear.innerText = 'Clear all completed';
  list.setAttribute('id', 'taks_list');
  list.setAttribute('class', 'list-group');
  listItem.setAttribute('class', 'list-group-item task_item ');
  itemCotent.setAttribute('class', 'task_details');
  for (let i = 0; i < arr.length; i += 1) {
    itemCotent.innerHTML = `
            <input type="checkbox" id="check_task" name="check_task" value="${arr[i].completed}">
            <p class="task_description">${arr[i].description}</p>
            <a href="#"><i class="bi bi-three-dots-vertical"></i></a>`;
    // append element
    listItem.appendChild(itemCotent);
    list.innerHTML += listItem.innerHTML;
  }
  container.appendChild(list);
  container.appendChild(btnClear);
};

window.onload = () => populateTasks(tasks);