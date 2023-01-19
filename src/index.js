import _ from 'lodash';
import './style.css';
//import 'bootstrap';
require('bootstrap')
import 'bootstrap/dist/css/bootstrap.min.css';
//import { access } from 'graceful-fs';
require('bootstrap-icons/font/bootstrap-icons.css');
//import 'bootstrap-icons/font/bootstrap-icons.css';


const tasks = [
    {
        description:"Description",
        completed:false,
        index:1,
    },
    {
        description:"Description 1",
        completed:false,
        index:2,
    },
    {
        description:"Description 2",
        completed:true,
        index:3,
    },
]
const container = document.getElementById('container')
const populateTasks = (arr) => {
    const list = document.createElement('ul')
    const listItem = document.createElement('li')
    let itemCotent = document.createElement('div')
    const btnClear = document.createElement('button')
    btnClear.setAttribute('type',"button")
    btnClear.setAttribute('id',"btn_clear")
    btnClear.innerText="Clear all completed"
    //btnClear.innerHTML = `<button type="button" id = "btn_clear">Clear all completed</button>`
    list.setAttribute('id','taks_list')
    list.setAttribute('class','list-group')
    listItem.setAttribute('class','list-group-item task_item ')
    itemCotent.setAttribute('class','task_details')
    for(let i = 0; i < arr.length; i++){
        itemCotent.innerHTML=`
            <input type="checkbox" id="check_task" name="check_task" value="${arr[i].completed}">
            <p class="task_description">${arr[i].description}</p>
            <a href="#"><i class="bi bi-three-dots-vertical"></i></a>`
        // append element
        listItem.appendChild(itemCotent)
        //console.log(arr[i].description)
        list.innerHTML+= listItem.innerHTML  
    }
    container.appendChild(list)
    container.appendChild(btnClear)
}

window.onload = () => populateTasks(tasks)