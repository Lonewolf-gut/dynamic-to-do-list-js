// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    // Get and trim the input value
    const taskText = taskInput.value.trim();

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
    });

    // Append the remove button to the task item
    taskItem.appendChild(removeButton);

    // Add the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
  }

  // Event listener for the add button
  addButton.addEventListener("click", addTask);

  // Event listener for pressing the Enter key in the input field
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Initialize the application on page load (optional, for data fetching or default tasks)
  addTask();
});
