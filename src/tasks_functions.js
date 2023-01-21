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

    const btnRemoveATask = document.createElement("a")
    btnRemoveATask.setAttribute("href","#")
    btnRemoveATask.setAttribute('class',"linkM")
    if(!(!arr.length)){
        for (let i = 0; i < arr.length; i += 1) {
            arr[i].index=i
            btnRemoveATask.innerHTML= `
                <i class="bi bi-three-dots-vertical" id="${arr[i].index}"></i>`
            
            itemCotent.innerHTML = `
                  <input type="checkbox" id="check_task_${arr[i].index}" name="check_task" ${arr[i].completed ? "checked":""}>
                  <p class="task_description checked" id="descrip${arr[i].index}">${arr[i].description}</p>
                  `;
            
            itemCotent.appendChild(btnRemoveATask)
            // append element
            listItem.appendChild(itemCotent);
            list.innerHTML += listItem.innerHTML;
        }
    }
    
    container.appendChild(list);
    container.appendChild(btnClear);

    for(let i=0; i<arr.length;i+=1){
        const paraDescription = document.getElementById(`descrip${i}`)
        if(arr[i].completed){
            paraDescription.classList.add('checked')
        }else {
            paraDescription.classList.remove('checked')
        }
    }

    //remove a task
    localStorage.setItem('tasks', JSON.stringify(arr));
    list.addEventListener('click',(e) => {
        if(Number.isInteger(Number(e.target.id))){
        let index = e.target.id
        const description = document.getElementById(`descrip${index}`).innerText
        removeTask(description)
    }});
    //clear checked
    let listCheckBox = document.querySelectorAll('[type="checkbox"]');
    [].forEach.call(listCheckBox, function (checkBox) {
        checkBox.addEventListener("click", function(){
            const checkIndex = this.id
            for(let i = 0; i<arr.length;i+=1){
                if(checkIndex.includes(`${i}`)){
                    if(arr[i].completed){
                        arr[i].completed=false
                    }else{
                        arr[i].completed=true
                    }
                    
                }
            }
            document.getElementById("taks_list").remove()
            document.getElementById("btn_clear").remove()
            

            populateTasks(arr)
    })})
    btnClear.addEventListener('click',()=> {
        removeCompletedTask()
        console.log(listCheckBox)      
    })
  };

const addTask = (description) => {
    let arr = JSON.parse(localStorage.getItem('tasks')) || []
    let index = arr.length
    let task = {}
    task.description = description
    task.completed = false
    task.index = index
    arr.push(task)
    
    document.getElementById("taks_list").remove()
    document.getElementById("btn_clear").remove()
    document.querySelector("#input_task").value="";
    //console.log(arr)
    populateTasks(arr)
}

const removeTask = (description) => {
    let arr = JSON.parse(localStorage.getItem('tasks'))
    const newArr = arr.filter((task) => task.description != description);
    arr=[...newArr]
    
    document.getElementById("taks_list").remove()
    document.getElementById("btn_clear").remove()
    populateTasks(arr)
    //console.log(arr)
}

const removeCompletedTask = () => {
    let arr = JSON.parse(localStorage.getItem('tasks')) || []
    //populateTasks(arr)
    if (!(!arr.length)){
        console.log(!(!arr.length))
        for(let i = 0; i < arr.length; i+=1){
            if(arr[i].completed){
                removeTask(arr[i].description)
            }
        }
    }
}

export {addTask,populateTasks, }