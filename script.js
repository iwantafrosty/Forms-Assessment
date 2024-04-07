
let todos = [];


function renderTodos() {
  const todoList = document.getElementById('todo-list');

  todoList.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo;
    todoList.appendChild(li);
  });
}


function handleFormSubmit(event) {
  event.preventDefault(); 
  const todoInput = document.getElementById('todo-input');
  const todoText = todoInput.value.trim(); 
  if (todoText !== '') { 
    todos.push(todoText); 
    todoInput.value = ''; 
    renderTodos(); 
  }
}

document.getElementById('todo-form').addEventListener('submit', handleFormSubmit);
