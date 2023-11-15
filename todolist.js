const tableTask = new Array();
let btnadd = document.querySelector("#btn1");
let input = document.querySelector("#input");
let list = document.querySelector("#box");
let ol = document.querySelector("ol");
let task = "";


// Ajouter une tache a notre liste
btnadd.addEventListener("click", addTask)
function addTask() {
    task = input.value;
    tableTask.push(task);
    input.value = "";
    console.log(tableTask);
    console.log(containTask());
};
input.addEventListener("keypress", addTaskEnter)
function addTaskEnter(event) {
    if (event.key === "Enter") {
        task = input.value;
        tableTask.push(task);
        input.value = "";
        console.log(tableTask);
        console.log(containTask());
    }
}


// Afficher les taches
function containTask() {
    var li = document.createElement("li")
    ol.appendChild(li)
    completedTask(li)
    let label = document.createElement("label")
    li.appendChild(label)
    listTask(label)
    editTask(li, label)
    deleteTask(li)
    // label.innerText = 'bonjour'
    // for (let i = 0; i < tableTask.length; i++) {
    //     label.innerText = tableTask[i]
    //     // Completé une tache
    //     let completed = document.createElement("i")
    //     completed.className = "fa-regular fa-circle-check"
    //     li.appendChild(completed)
    //     // Modifier une tache
    //     let edit = document.createElement("i")
    //     edit.className = "fa-solid fa-pen-to-square"
    //     li.appendChild(edit)
    //     // edit.addEventListener("click", function () {

    //
}


function completedTask(check) {
    let completed = document.createElement("i")
    completed.className = "fa-regular fa-circle-check"
    check.appendChild(completed)
    completed.addEventListener("click", function () {
        if (completed.style.color == 'green') {
            completed.className = "fa-regular fa-circle-check"
            completed.style.color = ''
        }
        else {
            completed.className = "fa-solid fa-circle-check"
            completed.style.color = 'green'
        }
    })
}


function listTask(view) {
    for (let i = 0; i < tableTask.length; i++) {
        view.innerText = tableTask[i]
    }
}



function editTask(modifier1, modifier2) {
    let edit = document.createElement("i")
    edit.className = "fa-solid fa-pen-to-square"
    modifier1.appendChild(edit)
    edit.addEventListener("click", function () {
        edit.className = ""
        let edittask = modifier2.innerText
        modifier2.innerText = ""
        var editinput = document.createElement("input")
        modifier1.appendChild(editinput)
        editinput.focus()
        editinput.value = edittask
        editinput.style.outline = "none";
        editinput.style.border = "none";
        editinput.addEventListener("blur", function () {
            edit.className = "fa-solid fa-pen-to-square"
            modifier2.innerText = editinput.value
            modifier1.removeChild(editinput)
        })
        // editinput.addEventListener("keypress", function (event) {
        //     if (event.key === "Enter") {
        //         edit.className = "fa-solid fa-pen-to-square"
        //         modifier2.innerText = editinput.value
        //         modifier1.removeChild(editinput)
        //     }
        // })
    })
}


function deleteTask(remove) {
    let delet = document.createElement("i")
    delet.className = "fa-regular fa-trash-can"
    remove.appendChild(delet)
    delet.addEventListener("click", function () {
        ol.removeChild(remove)
    })
}