const taskInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("addtodo-btn");
const todoList = document.getElementById("todos-list");
const itemsLeft = document.getElementById("items-left");
const clrCompletedBtn = document.getElementById("clr-btn");
const dateElement = document.getElementById("date-today");
const emptyState = document.querySelector(".empty-state");
const filters = document.querySelectorAll(".filter");

let todos = [];
let currentFilter = "all";

window.addEventListener("DOMContentLoaded", () => {
    loadTodo();
    CheckEmptyState();
    updateItemsCount();
    setDate();
});

addTaskBtn.addEventListener("click", () => {
    addTodo(taskInput.value);   
});

taskInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") addTodo(taskInput.value);  
});

clrCompletedBtn.addEventListener("click", clearCompleted);


function addTodo(text) {
    if(text.trim() === "") return;
    
    const todo = {
        id: Date.now(),
        text: text,
        completed: false,
    };

    todos.push(todo);

    saveTodos();
    renderTodos();
    taskInput.value = "";
};

function saveTodos() {
    localStorage.setItem("todoinfo", JSON.stringify(todos));
    updateItemsCount();
    CheckEmptyState();
}

function updateItemsCount(){
    const uncompletedTodoCounts = todos.filter((todo) => !todo.completed);
    itemsLeft.textContent = `${uncompletedTodoCounts.length} uncompleted task${uncompletedTodoCounts.length !== 1 ? "s" : ""} left`; 
};

function  CheckEmptyState(){
    const filteredTodos = filterTodos(currentFilter);

    if(filteredTodos.length === 0) {
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    };
};

function filterTodos (filter) {
    switch(filter) {
        case "active":
            return todos.filter((todo) => !todo.completed);
        case "completed":
            return todos.filter((todo) => todo.completed);
        default:
            return todos;
    };
};

function renderTodos() {
    todoList.innerHTML = "";

    const filteredTodos = filterTodos(currentFilter);
    
    filteredTodos.forEach((todo) => {
        const todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");
        if(todo.completed) todoItem.classList.add("completed");

        const checkboxContainer = document.createElement("label");
        checkboxContainer.classList.add("checkbox-container");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("todo-checkbox");
        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", () => toggleTodo(todo.id));

        const checkmark = document.createElement("span");
        checkmark.classList.add("checkmark");

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(checkmark);

        const todoText = document.createElement("span");
        todoText.classList.add("todo-item-text");
        todoText.textContent = todo.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML = `<i class="fas fa-times"></i>`
        deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

        todoItem.appendChild(checkboxContainer);
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteBtn);

        todoList.appendChild(todoItem);
    });
};

function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    saveTodos();
    renderTodos();
};

function toggleTodo(id) {
    todos = todos.map((todo) => {
        if(todo.id === id) {
            return {...todo, completed: !todo.completed};
        };
        return todo;
    });
    saveTodos();
    renderTodos();
};

function loadTodo() {
    const storedTodos = localStorage.getItem("todoinfo");
    if(storedTodos) todos = JSON.parse(storedTodos);
    renderTodos();
    
};

function clearCompleted() {
    todos = todos.filter((todo) => !todo.completed );
    saveTodos();
    renderTodos();
};

filters.forEach((filter) => {
    filter.addEventListener("click", () => {
        setActiveFilter(filter.getAttribute("data-filter"));
    });
});

function setActiveFilter(filter) {
    currentFilter = filter;

    filters.forEach((tab) => {
    if(tab.getAttribute("data-filter") === currentFilter){
        tab.classList.add("active");
    } else {
        tab.classList.remove("active");
    }});

    renderTodos();
};

function setDate() {
    const options = {weekday:"long", month:"short", day:"numeric"};
    const today = new Date();

    dateElement.textContent = today.toLocaleDateString("en-US", options);
};

