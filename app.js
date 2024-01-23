window.addEventListener('DOMContentLoaded', (event) => {
    // Initialize counters
    var openedTasks = 0;
    var closedTasks = 0;

    const addTaskButton = document.getElementById('addTaskButton');
    if (addTaskButton) {
        addTaskButton.addEventListener('click', function() {
            document.getElementById('taskForm').style.display = 'block';
        });
    }

    const taskForm = document.getElementById('taskForm');
    if (taskForm) {
        taskForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var taskName = document.getElementById('taskName').value;
            var projectName = document.getElementById('projectName').value;
            var dueDate = document.getElementById('dueDate').value;
            var taskList = document.getElementById('taskList');
            var newTask = document.createElement('tr');
            newTask.innerHTML = `<td>${taskName}</td><td>${projectName}</td><td>${dueDate}</td><td><button class="edit">Edit</button><button class="delete">Delete</button></td><td><input type="checkbox" class="completed"></td>`;
            
            newTask.querySelector('.completed').addEventListener('change', function() {
                var taskRow = this.parentNode.parentNode;
                taskRow.classList.toggle('completed');
                if (taskRow.classList.contains('completed')) {
                    taskRow.style.color = 'green'; // Change font color to gray
                    closedTasks++; // Increment closed tasks counter
                    document.getElementById('closedTasks').textContent = 'Closed tasks: ' + closedTasks;
                } else {
                    taskRow.style.color = ''; // Reset font color
                    closedTasks--; // Decrement closed tasks counter
                    document.getElementById('closedTasks').textContent = 'Closed tasks: ' + closedTasks;
                }
            });
            
            newTask.querySelector('.delete').addEventListener('click', function() {
                var taskRow = this.parentNode.parentNode;
                var nextSibling = taskRow.nextSibling;
                taskRow.remove();
                if (nextSibling && nextSibling.nodeName === 'HR') {
                    nextSibling.remove();
                }
                openedTasks--; // Decrement opened tasks counter
                document.getElementById('openedTasks').textContent = 'Opened tasks: ' + openedTasks;
            });
            
            newTask.querySelector('.edit').addEventListener('click', function() {
                var taskRow = this.parentNode.parentNode;
                document.getElementById('taskName').value = taskRow.children[0].textContent;
                document.getElementById('projectName').value = taskRow.children[1].textContent;
                document.getElementById('dueDate').value = taskRow.children[2].textContent;
                document.getElementById('taskForm').style.display = 'block';
                taskRow.remove();
            });
            
            taskList.appendChild(newTask);

            // Add a line after each task
            var line = document.createElement('hr');
            line.style.cssText = 'width: 100%; border: none; border-top: 1px solid black;'; // Make the line longer
            taskList.appendChild(line);

            document.getElementById('taskForm').style.display = 'none';

            // Clear the form inputs
            document.getElementById('taskName').value = '';
            document.getElementById('projectName').value = '';
            document.getElementById('dueDate').value = '';

            openedTasks++; // Increment opened tasks counter
            document.getElementById('openedTasks').textContent = 'Opened tasks: ' + openedTasks;
        });
    }
});
