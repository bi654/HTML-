function addTask() {
    var taskInput = document.getElementById("taskInput");
    var dateInput = document.getElementById("dateInput");
    var timeInput = document.getElementById("timeInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        var now = new Date();
        var dateString = dateInput.value || now.toISOString().slice(0, 10);
        var timeString = timeInput.value || now.toLocaleTimeString();
        li.innerHTML = `${taskInput.value} (${dateString} ${timeString}) <button onclick="removeTask(this)">Remove</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
        dateInput.value = "";
        timeInput.value = "";
    }
}

function removeTask(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}
