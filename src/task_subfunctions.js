const buildList = (arr) => {
  const container = document.getElementById('container');
  const list = document.createElement('ul');
  const listItem = document.createElement('li');
  const itemCotent = document.createElement('div');
  const btnClear = document.createElement('button');

  btnClear.setAttribute('type', 'button');
  btnClear.setAttribute('id', 'btn_clear');
  btnClear.innerText = 'Clear all completed';
  list.setAttribute('id', 'taks_list');
  list.setAttribute('class', 'list-group js-interactive-list');
  listItem.setAttribute('class', 'list-group-item task_item ');
  itemCotent.setAttribute('class', 'task_details');

  const btnRemoveATask = document.createElement('a');
  btnRemoveATask.setAttribute('href', '#');
  btnRemoveATask.setAttribute('class', 'linkM');
  if (arr.length) {
    for (let i = 0; i < arr.length; i += 1) {
      arr[i].index = i;
      btnRemoveATask.innerHTML = `
                  <i class="bi bi-three-dots-vertical" id="${arr[i].index}"></i>`;

      itemCotent.innerHTML = `
                    <input type="checkbox" id="check_task_${arr[i].index}" name="check_task" ${arr[i].completed ? 'checked' : ''}>
                    <p class="task_description checked" id="descrip${arr[i].index}">${arr[i].description}</p>
                    `;

      itemCotent.appendChild(btnRemoveATask);
      // append element
      listItem.appendChild(itemCotent);
      list.innerHTML += listItem.innerHTML;
    }
  }

  container.appendChild(list);
  container.appendChild(btnClear);

  for (let i = 0; i < arr.length; i += 1) {
    const paraDescription = document.getElementById(`descrip${i}`);
    if (arr[i].completed) {
      paraDescription.classList.add('checked');
    } else {
      paraDescription.classList.remove('checked');
    }
  }
  localStorage.setItem('tasks', JSON.stringify(arr));
  // remove a task

  // clear checked
};

export { buildList as default };