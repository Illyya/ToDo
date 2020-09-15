let input = document.querySelector('.todo__input');
let addTask = document.querySelector('.todo__btn_add');
let list = document.querySelector('.todo__list');
let removeTask = document.querySelector('.todo__btn_remove');

addTask.onclick = function (e) {
    e.preventDefault();
    if (input.value) {
        let liFirst = document.createElement('li');
        let cross = document.createElement('span');
        liFirst.textContent = input.value;
        cross.innerHTML = '&#10006';
        list.prepend(liFirst);
        liFirst.append(cross);
        input.value = '';
        cross.onclick = function() {
            liFirst.remove();
        }
    }
}
removeTask.onclick = function (e) {
    e.preventDefault();
    let tasks = document.querySelectorAll('li');
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].remove();        
    }    
}

    
