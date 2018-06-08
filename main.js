// Add list item
const addItemBtn = document.querySelector('#addItemBtn');
const newListItem = document.querySelector('ol');

addItemBtn.addEventListener('click', addNewListItem);

function addNewListItem() {
  let dateId = Date.now();
  let node = document.createElement('li');
  let textNode = document.createTextNode(dateId);
  let delBtn = document.createElement('button');
  let delBtnTextNode = document.createTextNode('delete');

  delBtn.appendChild(delBtnTextNode);
  node.appendChild(textNode);
  node.appendChild(delBtn);
  newListItem.appendChild(node);
  
  node.setAttribute('id', dateId);
  delBtn.addEventListener('click', () => deleteItem(dateId));
}

// Delete list item
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