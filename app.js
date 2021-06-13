const doList = document.querySelector('.ul-list');
const form = document.getElementById('form')
const inputBox = document.querySelector('.inputbox');
const addBtn = document.querySelector('.add-task');
const doListChild = document.querySelector('.task-item');
const deleteBtn = document.querySelectorAll('.delete-task');
const checkBtn = document.querySelector('.checked-task');
const listDiv = document.querySelector(".to-do-list");

form.addEventListener('submit', function(e) {
  //initialize list item and store task
  e.preventDefault()
  let task = inputBox.value
  let taskItem = document.createElement('li')
  taskItem.classList.add('task-item')
  taskItem.innerHTML = `${task}`
  
  //Add buttons to list-item
  let checkBtn = document.createElement('button')
  let deleteBtn = document.createElement('button')
  checkBtn.classList.add('checked-task')
  deleteBtn.classList.add('delete-task')
  deleteBtn.addEventListener('click', deleteTask)
  //insert fontawesome icon
  checkBtn.innerHTML = `
    <i class="fas fa-check"></i>
  `
  //insert X text
  deleteBtn.innerText = 'X'
  taskItem.appendChild(checkBtn)
  taskItem.appendChild(deleteBtn)
  doList.appendChild(taskItem)
})


function deleteTask() {
  let currentTarget = this.parentNode
  currentTarget.remove()
}

deleteBtn.forEach(btn => btn.addEventListener('click', deleteTask))

/*
I need to create a delete button for each item in the list

First I need to grab my list of objects and put it in the nodelist for just a moment
then develop a loop that goes through the nodelist length
then i need to create a button
then i need to attach the button to my list
I need to do that for every item in the list
*/
/*
let myNodeList = document.getElementsByTagName('ul'); 
let i;
for(i = 0; i < myNodeList.length; i++) {
    let newDeleteBtn = document.createElement("button");
    newDeleteBtn.innerHTML = "X";
    newDeleteBtn.className = "delete_task";
    myNodeList[i].appendChild(newDeleteBtn);
}
*/