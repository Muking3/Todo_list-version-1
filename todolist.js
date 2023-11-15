let input = document.querySelector("#input")
// console.log(input);
let btnadd = document.querySelector("#btn1")
let btndelete = document.querySelector("#btn2")
let btnedit = document.querySelector("#btn3")
let btncompleted = document.querySelector("#btn4")
console.log(btnadd);
var task = ""
btnadd.addEventListener("click", function () {
    task = input.value
    // console.log(task);
    input.value = ""
    // console.log(addtask(task))
    console.log(listask(task));
})
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        task = input.value
        // console.log(task);
        input.value = ""
        console.log(listask(task));
    }
})





// function addtask(x) {
//     let table = []
//     table.push(x)
//     console.log(table);
// }

function listask(y) {
    let list = document.querySelector("#box")
    var div = document.createElement("div")
    list.appendChild(div)
    var checkbox = document.createElement("input")
    var label = document.createElement("label")
    checkbox.type = "checkbox"
    label.innerHTML = y
    div.appendChild(checkbox)
    div.appendChild(label)

    // li.appendChild(task)
    checkbox.addEventListener("change", function () {
        btndelete.addEventListener("click", function () {
            // label.innerHTML = ""
            // checkbox
            div.removeChild(checkbox)
            div.removeChild(label)
        })
        // modifier les taches
        btnedit.addEventListener("click", function () {
            let edittask = label.innerText
            label.innerText = ""
            var editinput = document.createElement("input")
            div.appendChild(editinput)
            editinput.focus()
            editinput.value = edittask
            editinput.style.outline = "none";
            editinput.style.border = "none";
            editinput.addEventListener("blur", function () {
                label.innerText = editinput.value
                div.removeChild(editinput)
            })
        })
        btncompleted.addEventListener("click", function () {
            // label.innerHTML = `${label.innerHTML} | Completed`
            div.removeChild(checkbox)
        })
    })
}
