// Add item
let addItemBtn = document.querySelector('#addItemBtn');
let newListItem = document.querySelector('ol');
//let items = [];

addItemBtn.addEventListener('click', addNewListItem);

function addNewListItem() {
  addListItemText();
  addDelBtnToListItem();
  //items.push()
}

function addListItemText() {
  let node = document.createElement('li');
  let textNode = document.createTextNode('List item');
  node.appendChild(textNode);
  newListItem.appendChild(node);
}

function addDelBtnToListItem() {
  let node = document.createElement('button');

  let textNode = document.createTextNode('delete');
  node.appendChild(textNode);
  newListItem.appendChild(node);
}

// Delete item


function deleteItem() {

}

// Clear list
let clrListBtn = document.querySelector('#clearList');
clrListBtn.addEventListener('click', clearList);

function clearList() {
  while(newListItem.firstChild) {
    newListItem.removeChild(newListItem.firstChild);
  }
}