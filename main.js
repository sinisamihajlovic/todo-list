// Add item
let addItemBtn = document.querySelector('#addItemBtn');
let newListItem = document.querySelector('ol');

addItemBtn.addEventListener('click', addNewListItem);

function addNewListItem() {
  addListItemText();
  addDelBtnToListItem();
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