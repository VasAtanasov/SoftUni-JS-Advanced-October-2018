function addItem() {
    let itemText = document.getElementById('newItemText').value;
    let itemValue = document.getElementById('newItemValue').value;

    let opt = document.createElement('option');
    opt.textContent = itemText;
    opt.value = itemValue;

    document.getElementById('menu').appendChild(opt);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}
