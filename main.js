// Add item
let addItemBtn = document.querySelector('#addItemBtn');
let newListItem = document.querySelector('ol');

addItemBtn.addEventListener('click', addNewListItem);

function addNewListItem() {
    let node = document.createElement('li');
    let textNode = document.createTextNode('List item');
    node.appendChild(textNode);
    newListItem.appendChild(node);
}

