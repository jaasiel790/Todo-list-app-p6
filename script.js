console.log("Script started");


// add a task
function addTask() {
    //get task text
    let textbox = document.getElementById("task-input");
    let taskText = textbox.value;
    textbox.value = "";

    //get tasklist
    let taskList = document.getElementById("task-list");

    //generate id number
    let idNum = taskList.childElementCount

    // create task div
     let taskDiv = document.createElement("div");
     taskDiv.id = "task" + taskList.childElementCount;
    taskDiv.classList.add("task-item")
    if (idNum % 2 == 1){
        taskDiv.style.backgroundColor = "turquoise";
    }
    // create checkbox
     let checkbox = document.createElement("input")
     checkbox.type = "checkbox";
     checkbox.id = "checkbox" + taskList.childElementCount;

    //create label
    let label = document.createElement("label")
    label.id = "label" + taskList.childElementCount;
    //set label text
    label.innerText = taskText;
    //add the checkbox to the task div
    taskDiv.appendChild(checkbox);
    //add the label to the task div
    taskDiv.appendChild(label);
    // add the task div to the list
    taskList.appendChild(taskDiv);
}