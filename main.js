// Add new task
const addItemBtn = document.querySelector('#addItemBtn');
const newListItem = document.querySelector('ol');
let newListItemText = document.querySelector('#taskText');

addItemBtn.addEventListener('click', addNewListItem);
newListItemText.addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.code === 'Enter') {
    addItemBtn.click();
  }
});

function addNewListItem() {
  let dateId = Date.now(); // Delete btn id
  let node = document.createElement('li');
  let textNode = document.createTextNode(newListItemText.value);
  let delBtn = document.createElement('button');
  let delBtnTextNode = document.createTextNode('delete');

  delBtn.appendChild(delBtnTextNode);
  node.appendChild(textNode);
  node.appendChild(delBtn);
  newListItem.appendChild(node);
  
  newListItemText.value = '';

  node.setAttribute('id', dateId);
  delBtn.addEventListener('click', () => deleteItem(dateId));
}

// Delete task
function deleteItem(dateId) {
  document.getElementById(dateId).parentElement.removeChild(document.getElementById(dateId));
}

// Clear list
let clrListBtn = document.querySelector('#clearList');
clrListBtn.addEventListener('click', clearList);

function clearList() {
  while(newListItem.firstChild) {
    newListItem.removeChild(newListItem.firstChild);
  }
}