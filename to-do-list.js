const toDoItems = [];

function addtodo() {
const input = (document.querySelector('.toDoName'));
const inputToDo = input.value;

const selectedDate = (document.querySelector('.toDoDate'));
const dueDate = selectedDate.value;

toDoItems.push({
  name: inputToDo,
  dueDate
});

input.value = '';
renderList();
}

function renderList() {
  let allitems = '';

  toDoItems.forEach((toDoItems, index) => {
    const {name} = toDoItems;
    const {dueDate} = toDoItems;
    const HTML = `<div>${name}</div>
    <div>${dueDate}</div> 
    <button class="delete-button" onclick="deleteToDo(${index})">Delete</button>`
    allitems += HTML
  })

  // for(let i = 0; i < toDoItems.length; i++) {
  //   let items = toDoItems[i];
  //   const {name} = items;
  //   const {dueDate} = items;
  //   const HTML = `<div>${name}</div>
  //   <div>${dueDate}</div> 
  //   <button class="delete-button" onclick="deleteToDo(${i})">Delete</button>`
  //   allitems += HTML
  // }

  document.querySelector('.displayToDo').innerHTML = `${allitems}`;
}

function deleteToDo(index) {
  toDoItems.splice(index, 1);
  renderList();
}
