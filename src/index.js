import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addTask, populateTasks } from './tasks_functions.js';

require('bootstrap');
require('bootstrap-icons/font/bootstrap-icons.css');

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//! BUILD PAGE COTENTS

// const container = document.getElementById('container');
window.onload = () => { populateTasks(tasks); };

//! ADD AND REMOVE TASK

const btnInput = document.getElementById('btn_input');
btnInput.addEventListener('click', () => {
  const inputTask = document.getElementById('input_task').value;
  addTask(inputTask);
});

// window.onload = () => populateTasks(tasks);