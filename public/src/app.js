// Initialize Firebase app
const firebaseConfig = {
    // Firebase configuration
    apiKey: "AIzaSyAP-8IoWSYxNhvNAHq18yOe5S1B6nZKJQ4",
    authDomain: "task-e1b5f.firebaseapp.com",
    projectId: "task-e1b5f",
    storageBucket: "task-e1b5f.appspot.com",
    messagingSenderId: "877382835559",
    appId: "1:877382835559:web:b315dbc787c26643d323c2",
    measurementId: "G-PZGJGBVYD5"
};

firebase.initializeApp(firebaseConfig);

// Vue.js app instance
var app = new Vue({
    el: '#app',
    data: {
        user: true, // Example: assuming the user is authenticated
        openedTasks: 0,
        closedTasks: 0,
        tasks: [], // Array to store tasks
        taskName: '', // Data property to bind to task name input
        projectName: '', // Data property to bind to project name input
        dueDate: '', // Data property to bind to due date input
        taskDescription: '', // Data property to bind to task description input
        showForm: false, // Flag to control visibility of task form
        editMode: false, // Flag to check if editing a task
        editIndex: null, // Index of the task being edited
        editProject: null, // Project of the task being edited
        dropdowns: {}, // Object to store dropdown states for each project
        selectedTask: null // Object to store the currently selected task for details
    },
    computed: {
        groupedTasks() {
            return this.tasks.reduce((groups, task) => {
                if (!groups[task.project]) {
                    this.$set(this.dropdowns, task.project, false);
                    groups[task.project] = [];
                }
                groups[task.project].push(task);
                return groups;
            }, {});
        }
    },
    methods: {
        // Method to show task form
        showTaskForm() {
            this.showForm = !this.showForm; // Toggle showForm property
            this.editMode = false;
            this.taskName = '';
            this.projectName = '';
            this.dueDate = '';
            this.taskDescription = '';
        },
        // Method to submit the task form
        submitTask() {
            if (this.editMode) {
                // Update existing task
                const task = this.groupedTasks[this.editProject][this.editIndex];
                task.name = this.taskName.trim();
                task.project = this.projectName.trim();
                task.dueDate = this.dueDate;
                task.description = this.taskDescription.trim();
                this.editMode = false;
            } else {
                // Create new task object
                const newTask = {
                    name: this.taskName.trim(),
                    project: this.projectName.trim(),
                    dueDate: this.dueDate,
                    description: this.taskDescription.trim(),
                    completed: false
                };
                // Add new task to tasks array
                this.tasks.push(newTask);
                // Update task counters
                this.openedTasks++;
            }
            // Reset form fields
            this.taskName = '';
            this.projectName = '';
            this.dueDate = '';
            this.taskDescription = '';
            // Hide the task form
            this.showForm = false;
        },
        // Method to toggle task
        // Method to toggle task completion
        toggleTaskCompletion(task) {
            if (task.completed) {
                this.closedTasks++;
                this.openedTasks--;
            } else {
                this.closedTasks--;
                this.openedTasks++;
            }
        },
        // Method to edit task
        editTask(index, project) {
            const task = this.groupedTasks[project][index];
            this.taskName = task.name;
            this.projectName = task.project;
            this.dueDate = task.dueDate;
            this.taskDescription = task.description;
            this.showForm = true;
            this.editMode = true;
            this.editIndex = index;
            this.editProject = project;
        },
        // Method to delete task
        deleteTask(index, project) {
            if (confirm("Are you sure you want to delete this task?")) {
                const task = this.groupedTasks[project][index];
                if (task.completed) {
                    this.closedTasks--;
                } else {
                    this.openedTasks--;
                }
                this.tasks = this.tasks.filter((_, i) => !(i === index && task.project === project));
            }
        },
        // Method to toggle task dropdown
        toggleDropdown(project) {
            this.dropdowns[project] = !this.dropdowns[project];
        },
        // Method to show task details
        showTaskDetails(task) {
            this.selectedTask = task;
        },
        // Method to close task details
        closeTaskDetails() {
            this.selectedTask = null;
        },
        // Method to format date as DD/MM/YYYY
        formatDate(date) {
            const d = new Date(date);
            const day = ('0' + d.getDate()).slice(-2);
            const month = ('0' + (d.getMonth() + 1)).slice(-2);
            const year = d.getFullYear();
            return `${day}/${month}/${year}`;
        },
        // Method to simulate logout
        logout() {
            console.log('Logout button clicked');
            // Implement logout logic here
            // For now, we'll simulate a logout by resetting user data
            this.user = false;
            this.tasks = [];
            this.openedTasks = 0;
            this.closedTasks = 0;
            this.taskName = '';
            this.projectName = '';
            this.dueDate = '';
            this.taskDescription = '';
            this.showForm = false;
            this.editMode = false;
            this.editIndex = null;
            this.editProject = null;
            this.dropdowns = {};
            this.selectedTask = null;
        }
    }
});
