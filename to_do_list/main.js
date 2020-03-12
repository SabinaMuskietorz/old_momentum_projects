/* to do list */
window.onload = function () {
    let form = documents.getElementById("form");
    let input = doucment.getElementById("input");
    let btn = document.getElementById("btn");
    let list = document.getElementById("list");
    let btnClr = document.getElementById("btnClr");
    let id = 1;
//list item = {item: "todo item", chacked: false}
    let liItem = "";
    let todolist = [];
//button event listener
    btn.addEventListener("click", addTodoItem);
    //list event listener
    list.addEventListener("click", boxChecked);
    //event listener for clear list
    btnClr.addEventListener("clear list", clearList);
    //input.addEventListener("keydown, addTodoItem"):

    if (this.localStorage.length < 0) {
        btnClr.style.display = "none"; //hide clear btn
        this.console.log("button");
    }
    //checking localstorage has data
    if (this.localStorage.length <= 0) {
        btnClr.style.display = "none"; //hide clear btn
    }
    //add todo item to list
    function addTodoItem() {
        if(input.value === "") {
            alert("You must enter some value!");
        }
        else {
            if(list.style.borderTop === "") {
                console.log("here")
                list.style.borderTop = "2px solid white";
                btn.Clr.style.display = "inline";
            }
            let text = input.value;
            let item = `<li id="li-${id}">${text}<input id="box-${id}"  class="checkboxes" type="checkbox"></li>`;

            list.insertAdjacentHTML('beforeend', item);
            liItem = {item: text, checked: false};
            todolist.push(liItem);
            id++;
            addToLocalStorage()
            form.reset();
            }
    }
    //adding string through style to list item
    function boxChecked(event) {
        const element = event.target;
        if (element.type === "checkbox") {
          element.parentNode.style.textDecoration = "line-through";
          todoList = JSON.parse(localStorage.getItem("todoList"));
          todoList[element.id.split('-')[1] - 1].checked = element.checked.toString();
          localStorage.setItem("todoList", JSON.stringify(todoList));
        }
    }
    //adding data to local storage
    function addToLocalStorage() {
        if(typeof (Storage) !=="undefined") {
            localStorage.setItem("todoList", JSON.stringify(todolist));
        }
        else {
            alert("browser doesn't support local storage!");
        }
    }
    //display all todo list
    function displayList() {
        list.style.borderTop = "2px solid white";
        todolist = JSON.parse(localStorage.getItem("todoList"));
        todoList.forEach(function(element) {
            console.log(element.item)
            let text = element.item;
            let item = `<li id="li-${id}">${text}<input id="box-${id}" class="checkboxes" type="checkbox"></li>`;
            list.insertAdjacentHTML("beforeend", item);
            //if there is a checked box, then style
            if (element.checked) {
                let li = document.getElementById("li-" + id);
                li.style.textDecoration = "line-through";
                li.childNodes[1].checked = element.checked;
            }
            id++;
        });
    }
//clear list event listener
function clearList() {
    todolist = [];
    localStorage.clear();
    list.innerHTML = "";
    btnClr.style.display = "none";
    list.style.borderTop = "";
    }
}