/* eslintrc-disable no-empty-source */

const populateTasks = (arr) => {
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
    let btnRemoveATask = document.createElement("a")
    btnRemoveATask.setAttribute("href","#")
    btnRemoveATask.setAttribute('class',"linkM")
    for (let i = 0; i < arr.length; i += 1) {
        btnRemoveATask.innerHTML= `
            <i class="bi bi-three-dots-vertical"></i>`
        btnRemoveATask.setAttribute("id",`${arr[i].index}`)
        btnRemoveATask.setAttribute("data-additional",`${arr[i].description}`)
      itemCotent.innerHTML = `
              <input type="checkbox" id="check_task" name="check_task" value="${arr[i].completed}">
              <p class="task_description" id="descrip${arr[i].index}">${arr[i].description}</p>
              `;
      itemCotent.appendChild(btnRemoveATask)
      // append element
      listItem.appendChild(itemCotent);
      list.innerHTML += listItem.innerHTML;
    }
    container.appendChild(list);
    container.appendChild(btnClear);
    //remove a task
    
    list.addEventListener('click',(e) => {
        //removeTask(bookTitle);
        console.log(document.getElementsByClassName("linkM")[0].dataset.additionalb)
    });
  };

const addTask = (description,arr) => {
    let index = arr.length
    let task = {}
    task.description = description
    task.completed = false
    task.index = index
    arr.push(task)
    localStorage.setItem('tasks', JSON.stringify(arr));
    document.getElementById("taks_list").remove()
    document.getElementById("btn_clear").remove()
    document.querySelector("#input_task").value="";
    populateTasks(arr)
}

const removeTask = (description, arr) => {
    const newArr = arr.filter((task) => task.description !== description);
      localStorage.setItem('tasks', JSON.stringify(newArr));
}

const loadTasksFromLocal = () => {
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    return tasks
}

export {removeTask, addTask,populateTasks, loadTasksFromLocal }