'use strict';
(function () {
  const todo = document.querySelector('.todo-list');
  const list = todo.querySelector('.todo-list__list');
  const arrayTasks = [{
      task: 'delectus aut autem',
      message: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      checked: false,
    },
    {
      task: 'quo laboriosam deleniti aut qui',
      checked: false,
    },
    {
      task: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      checked: true,
    },
    {
      task: 'repellendus sunt dolores architecto voluptatum',
      message: 'accusamus eos facilis sint et aut voluptatem',
      checked: false,
    },
    {
      task: 'repellendus sunt dolores architecto voluptatum',
      message: 'accusamus eos facilis sint et aut voluptatem',
      checked: false,
    },
    {
      task: 'repellendus sunt dolores architecto voluptatum',
      message: 'accusamus eos facilis sint et aut voluptatem',
      checked: false,
    },
    {
      task: 'repellendus sunt dolores architecto voluptatum',
      message: 'accusamus eos facilis sint et aut voluptatem',
      checked: false,
    },
    {
      task: 'repellendus sunt dolores architecto voluptatum',
      message: 'accusamus eos facilis sint et aut voluptatem',
      checked: false,
    },
    {
      task: 'repellendus sunt dolores architecto voluptatum',
      message: 'accusamus eos facilis sint et aut voluptatem',
      checked: false,
    },
    {
      task: 'repellendus sunt dolores architecto voluptatum',
      message: 'accusamus eos facilis sint et aut voluptatem',
      checked: false,
    },
    {
      task: 'repellendus sunt dolores architecto voluptatum',
      message: 'accusamus eos facilis sint et aut voluptatem',
      checked: false,
    },
  ]

  list.addEventListener('change', evt => {
    let str = evt.target.getAttribute('id')
    let x = 'todo_';
    let rExp = new RegExp(x, "g");
    let id = +str.replace(rExp, '');

    arrayTasks[id].checked = !arrayTasks[id].checked

    renderTasks(arrayTasks, list)
  })

  function renderTasks(arr, list) {
    let displayTasks = ''
    for (let i = 0; i < arr.length; i++) {
      displayTasks += `
        <li>
        <input class="visually-hidden" type="checkbox" name="todo" id="todo_${i}"${arr[i].checked ? 'checked' : ''}>
        <label for="todo_${i}">
          <span>${arr[i].task}</span>
          <span>${arr[i].message}</span>
        </label>
      </li>
        `
      list.innerHTML = displayTasks;
    }
  }
  renderTasks(arrayTasks, list)
})();
