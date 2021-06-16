const doList = document.querySelector('.ul-list');
const form = document.getElementById('form')
const inputBox = document.querySelector('.inputbox');
const addBtn = document.querySelector('.add-task');
const doListChild = document.querySelector('.task-item');
const deleteBtn = document.querySelectorAll('.delete-task');
const checkBtn = document.querySelector('.checked-task');
const listDiv = document.querySelector(".to-do-list");
const editBtn = document.querySelector('edit-task')
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
  let editBtn = document.createElement('button')

  checkBtn.classList.add('checked-task')
  deleteBtn.classList.add('delete-task')
  editBtn.classList.add('edit-task')

  deleteBtn.addEventListener('click', deleteTask)
  checkBtn.addEventListener('click', checkTask)
  editBtn.addEventListener('click', editTask)
  //insert fontawesome icon
  checkBtn.innerHTML = `
    <i class="fas fa-check"></i>
  `
  //insert X text
  deleteBtn.innerHTML = `
  <i class="fas fa-trash-alt"></i>
`
editBtn.innerHTML = `
<i class="fas fa-pen"></i>
`

  taskItem.appendChild(checkBtn)
  taskItem.appendChild(deleteBtn)
  taskItem.appendChild(editBtn)
  doList.appendChild(taskItem)
})


function deleteTask() {
  let currentTarget = this.parentNode
  currentTarget.remove()
}
deleteBtn.forEach(btn => btn.addEventListener('click', deleteTask))

//check btn
function checkTask() {
let currentTarget = this.parentNode
currentTarget.classList.toggle("completed")

}
function editTask() {
  let editedTask = document.querySelector("li")
  editedTask.contentEditable = true
}

