let addToDoButton = document.getElementById('addTodo');
let toDoResult = document.getElementById('toDoResult');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function () {
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    toDoResult.appendChild(paragraph);
    inputField.value = " ";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
        paragraph.style.fontSize = '30px';
    })
    paragraph.addEventListener('dblclick', function () {
        toDoResult.removeChild(paragraph);
    })
})