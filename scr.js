
  // Initialize an array to store tasks
  let tasks = [];

  // Get references to the required elements
  const taskInput = document.querySelector("#newTask");
  const taskList = document.querySelector(".list-group");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    // Create a new list item with the task text and delete button
    const newTaskItem = document.createElement("li");
    newTaskItem.classList.add("list-group-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("form-check-input", "me-1");

    const label = document.createElement("label");
    label.classList.add("form-check-label");
    label.textContent = taskText;

    const deleteIcon = document.createElement("ion-icon");
    deleteIcon.setAttribute("name", "trash-outline");
    deleteIcon.addEventListener("click", () => removeTask(newTaskItem));

    newTaskItem.appendChild(checkbox);
    newTaskItem.appendChild(label);
    newTaskItem.appendChild(deleteIcon);

    taskList.appendChild(newTaskItem);

    // Add the task to the tasks array
    tasks.push(taskText);

    // Clear the input field
    taskInput.value = "";
  }

  // Function to remove a task
  function removeTask(taskItem) {
    const index = Array.from(taskList.children).indexOf(taskItem);
    if (index !== -1) {
      tasks.splice(index, 1);
      taskList.removeChild(taskItem);
    }
  }

  // Add click event listener to the "Add" button
  document.querySelector("#btn").addEventListener("click", addTask);

  // Add keyup event listener to the input field to add tasks on pressing "Enter"
  taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

