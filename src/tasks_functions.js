import { buildList, removeCompletedTask } from './task_subfunctions.js';

const removeTask = (description) => {
  let arr = JSON.parse(localStorage.getItem('tasks'));
  const newArr = arr.filter((task) => task.description !== description);
  arr = [...newArr];

  return arr;
};

const populateTasks = (arr) => {
  buildList(arr);
  const list = document.getElementById('taks_list');
  const btnClear = document.getElementById('btn_clear');

  // remove a task
  // localStorage.setItem('tasks', JSON.stringify(arr));
  list.addEventListener('click', (e) => {
    if (Number.isInteger(Number(e.target.id))) {
      const index = e.target.id;
      const description = document.getElementById(`descrip${index}`).innerText;
      removeTask(description);
      document.getElementById('taks_list').remove();
      document.getElementById('btn_clear').remove();
      populateTasks(removeTask(description));
    }
  });
  // clear checked
  const listCheckBox = document.querySelectorAll('[type="checkbox"]');
  [].forEach.call(listCheckBox, (checkBox) => {
    checkBox.addEventListener('click', (e) => {
      const checkIndex = e.target.id;
      for (let i = 0; i < arr.length; i += 1) {
        if (checkIndex.includes(`${i}`)) {
          if (arr[i].completed) {
            arr[i].completed = false;
          } else {
            arr[i].completed = true;
          }
        }
      }
      document.getElementById('taks_list').remove();
      document.getElementById('btn_clear').remove();

      populateTasks(arr);
    });
  });
  btnClear.addEventListener('click', () => {
    // removeCompletedTask();
    document.getElementById('taks_list').remove();
    document.getElementById('btn_clear').remove();
    populateTasks(removeCompletedTask());
  });
};

const addTask = (description) => {
  const arr = JSON.parse(localStorage.getItem('tasks')) || [];
  const index = arr.length;
  const task = {};
  task.description = description;
  task.completed = false;
  task.index = index;
  arr.push(task);

  document.getElementById('taks_list').remove();
  document.getElementById('btn_clear').remove();
  document.querySelector('#input_task').value = '';
  populateTasks(arr);
};

export { addTask, populateTasks };