document.getElementById('save-btn').addEventListener('click', function() {
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;

    if (title && desc) {
        const addedTime = new Date().toLocaleString();
        addTask(title, desc, addedTime);
        document.getElementById('task-title').value = '';
        document.getElementById('task-desc').value = '';
    } else {
        alert('Please fill out both fields.');
    }
});

function addTask(title, desc, addedTime) {
    const taskList = document.getElementById('pending-tasks');
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <div>
            <strong>${title}</strong><br>
            ${desc}
        </div>
        <div class="task-info">Added on: ${addedTime}</div>
        <div>
            <button onclick="markComplete(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    taskList.appendChild(taskItem);
}

function markComplete(button) {
    const taskItem = button.closest('li');
    const completedTime = new Date().toLocaleString();
    taskItem.classList.add('completed');
    taskItem.querySelector('.task-info').innerText += ` | Completed on: ${completedTime}`;
    document.getElementById('completed-tasks').appendChild(taskItem);
    taskItem.querySelector('button').remove();
}

function deleteTask(button) {
    const taskItem = button.closest('li');
    taskItem.remove();
}
