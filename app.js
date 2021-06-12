let doList = document.querySelector(".do-list");
let inputBox = document.querySelector(".inputbox");
let addBtn = document.querySelector(".addButton");
let doListChild = document.querySelector(".taskitem");
let deleteBtn = document.querySelector(".delete_task");

addBtn.addEventListener("click", function(){
let newLi = document.createElement('li');
let liContent = document.createTextNode(inputBox.value);
newLi.appendChild(liContent);
doList.appendChild(newLi);
/*
if (liContent !== ) {
    alert("Please write a task name!");
}
else {
    document.querySelector('.do-list').appendChild(newLi);
}
*/
});

deleteBtn.addEventListener("click", function(){
let listStore = document.querySelector('li');
listStore.remove();
});


/*
I need to create a delete button for each item in the list

First I need to grab my list of objects and put it in the nodelist for just a moment
then develop a loop that goes through the nodelist length
then i need to create a button
then i need to attach the button to my list
I need to do that for every item in the list
*/

let myNodeList = document.getElementsByTagName('ul'); 
let i;
for(i = 0; i < myNodeList.length; i++) {
    let newDeleteBtn = document.createElement("button");
    newDeleteBtn.innerHTML = "X";
    newDeleteBtn.className = "delete_task";
    myNodeList[i].appendChild(newDeleteBtn);
}
