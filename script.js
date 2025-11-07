console.log("Script started");


// add a task
function addTask() {
    //get task text
    let textbox = document.getElementById("task-input");
    let taskText = textbox.value;
    textbox.value = "";
    createTask(taskText);

    if(taskText == ""){
        alert("please enter a task");
        return;
    }
    
     let idNum = generateIdNum();

     createTask(taskText, idNum);

    //save task to local storage
    localStorage.setItem("task" + idNum, taskText);
    console.log(localStorage.length);
}

function generateIdNum() {
    // start with id num 0
    let idNum = 0;

    //check if there is a task exist
    while (localStorage.getItem("task" +idNum) != null) {
        idNum++;
    }

    //if it does increment idNum and check again
    return Idnum;

}

function removeTask(event) {
    //get the id of the div to remove
    let checkboxid = event.target.id;
    let idNum = checkboxid.substring(8);
    let taskDiv = document.getElementById("task" + idNum);
    taskDiv.classList.add("remove");
    //get task list container
     let taskList = document.getElementById("task-list");
    //remove task div
    setTimeout(function() {
        taskList.removeChild(taskDiv);
        fixColor();
        localStorage.removeItem(taskDiv.id);
    }, 1000)

    
}

function fixColor() {
    let taskList = document.getElementById("task-list");
    for (let i = 0; i < taskList.childElementCount; i++) {
        taskList.children[i].style.backgroundColor = "dodgerblue";
        if(i % 2 == 0) {
            taskList.children[i].style.backgroundColor =  "turquoise"
        }
         
    }
}

function createTask(taskText, idNum) {
   //get tasklist
    let taskList = document.getElementById("task-list");

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
     checkbox.addEventListener("change", removeTask);

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

function loadTask() {
  for(let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(key);
    let taskText = localStorage.getItem(key);
    console.log(taskText);
    createTask(taskText, key.substring(4));
  }
  fixColor();
}
loadTask();
