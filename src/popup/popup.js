const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
function renderTasks(tasks = []) {
    taskList.innerHTML = '';
    tasks.forEach((taskText, index) => {
        const listItem = document.createElement('li');

        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;
        textSpan.className = 'task-text';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            removeTask(index);
        });

        listItem.appendChild(textSpan);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
    });
}
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        return; 
    }
    chrome.storage.local.get({ tasks: [] }, (result) => {
        const tasks = result.tasks;
        tasks.push(taskText);
        chrome.storage.local.set({ tasks: tasks }, () => {
            renderTasks(tasks);
            taskInput.value = ''; 
        });
    });
}

function removeTask(index) {
    chrome.storage.local.get({ tasks: [] }, (result) => {
        const tasks = result.tasks;
        tasks.splice(index, 1); 
        chrome.storage.local.set({ tasks: tasks }, () => {
            renderTasks(tasks);
        });
    });
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get({ tasks: [] }, (result) => {
        renderTasks(result.tasks);
    });
});