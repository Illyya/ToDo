let input = document.querySelector('.todo__input');
let addTask = document.querySelector('.todo__btn_add');
let list = document.querySelector('.todo__list');
let deleteTasks = document.querySelector('.todo__btn_remove');

addTask.onclick = function (e) {
    e.preventDefault();
    if (input.value) {
        let liFirst = document.createElement('li');
        let par = document.createElement('p');
        let done = document.createElement('span');
        let deleteTask = document.createElement('span');
        par.textContent = input.value;
        done.innerHTML = '&#10004';
        done.style.marginLeft = 'auto';
        done.style.marginRight = '0.7rem';
        done.style.color = 'green';
        deleteTask.innerHTML = '&#10006';
        list.prepend(liFirst);
        liFirst.prepend(par);
        liFirst.append(done);
        liFirst.append(deleteTask);
        input.value = '';
        deleteTask.onclick = function() {
            liFirst.remove();
        }
        done.onclick = function() {
            par.classList.toggle('line-through');            
        }
    }
}
deleteTasks.onclick = function (e) {
    e.preventDefault();
    let tasks = document.querySelectorAll('li');
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].remove();        
    }    
}

    
