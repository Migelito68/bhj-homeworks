let input = document.getElementById('task__input');
let taskList = document.getElementById('tasks__list');
let button = document.getElementById('tasks__add');
let form = document.getElementById('tasks__form');

function addTask() {
    if (input.value.trim() != '') {
        taskList.insertAdjacentHTML('afterbegin', `<div class="task">
        <div class="task__title">
          ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`);
      input.value = '';
    }   
    taskList.firstChild.querySelector('.task__remove').addEventListener('click', (e) => {
        e.preventDefault();
        e.target.closest('.task').remove();
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
});