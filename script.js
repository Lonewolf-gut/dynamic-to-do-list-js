// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  // Function to add a new task
  function addTask(taskText, save = true) {
    // If no taskText is provided, get and trim the input value
    if (!taskText) {
      taskText = taskInput.value.trim();
    }

    // Alert the user if the input is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item for the task
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Create a remove button for the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Add event listener to the remove button
    removeButton.addEventListener("click", () => {
      taskList.removeChild(taskItem);
      removeTaskFromLocalStorage(taskText);
    });

    // Append the remove button to the task item
    taskItem.appendChild(removeButton);

    // Add the task item to the task list
    taskList.appendChild(taskItem);

    // Save task to Local Storage if required
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    // Clear the input field
    taskInput.value = "";
  }

  // Function to remove a task from Local Storage
  function removeTaskFromLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = storedTasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  // Event listener for the add button
  addButton.addEventListener("click", () => addTask());

  // Event listener for pressing the Enter key in the input field
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Load tasks from Local Storage on page load
  loadTasks();
});
