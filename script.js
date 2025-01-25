document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn"); // "Add Task" button
  const taskInput = document.getElementById("task-input"); // Task input field
  const taskList = document.getElementById("task-list"); // Unordered list to display tasks

  // Function to add tasks
  function addTask() {
    const taskText = taskInput.value.trim(); // Retrieve and trim the task input value

    // Check if the input is not empty
    if (taskText === "") {
      alert("Please enter a task!"); // Prompt user if the task is empty
    } else {
      // Create a new li element for the task
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      // Create a remove button for the task
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.className = "remove-btn"; // Assign a class directly using className

      // Assign onclick event to remove the task
      removeButton.onclick = function () {
        taskList.removeChild(taskItem); // Remove the task from the list when clicked
      };

      // Append the remove button to the task item and task item to the task list
      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);

      // Clear the input field after adding the task
      taskInput.value = "";
    }
  }

  // Attach event listeners
  addButton.addEventListener("click", addTask); // Add task when the button is clicked

  // Allow tasks to be added with the "Enter" key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask(); // Add task when "Enter" key is pressed
    }
  });

  // Initially invoke addTask function on page load to make sure everything is set up
  // This is not strictly necessary since events are already attached, but it's here for completeness
  addTask();
});
