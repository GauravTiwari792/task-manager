const newTaskInput = document.getElementById('new-task');

newTaskInput.addEventListener('input', (event) => {
    const newTask = event.target.value;
    const addBtn = document.getElementById('add-task')
    if (newTask) {
        addBtn.removeAttribute('disabled')
    } else {
        addBtn.setAttribute('disabled', true)
    }
})

function addTask() {
    const todo = document.getElementById('new-task').value;

    const taskList = document.getElementById('task-list');
    const leftPart = document.createElement('span');
    const rightPart = document.createElement('span');

    const li = document.createElement('li');
    leftPart.innerText = todo

    const markAsCompletedBtn = document.createElement('button');
    markAsCompletedBtn.innerText = '✔️'
    markAsCompletedBtn.classList.add('mark-btn');

    const editBtn = document.createElement('button');
    editBtn.innerText = '✏️';
    editBtn.classList.add('edit-btn');

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '❌'
    deleteButton.classList.add('delete-btn');

    markAsCompletedBtn.addEventListener('click', () => markAsCompleted(leftPart, markAsCompletedBtn));

    editBtn.addEventListener('click', () => editTask(todo, leftPart));

    deleteButton.addEventListener('click', () => deleteTask(li));

    rightPart.append(markAsCompletedBtn, editBtn, deleteButton);

    li.append(leftPart, rightPart);

    taskList.append(li);
    document.getElementById('new-task').value = '';
}

function markAsCompleted(leftPart, markAsCompletedBtn) {
    leftPart.classList.add('completed')
    markAsCompletedBtn.style.display = 'none'
}

function editTask(todo, leftPart) {
    const updatedTodo = prompt('Enter the updated task', todo);
    if (updatedTodo) {
        leftPart.innerText = updatedTodo;
    } else {
        alert('Invalid input! Task cannot be empty.')
    }
}

function deleteTask(li) {
    li.remove()
}

