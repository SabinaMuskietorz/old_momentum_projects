/* to do list */
window.onload = function () {
    let form = documents.getElementById("form");
    let input = doucment.getElementById("input");
    let btn = document.getElementById("btn");
    let list = document.getElementById("list");
    let btnClr = document.getElementById("btnClr");
    let id = 1;

    let liItem = "";
    let todolist = [];

    btn.addEventListener("click", addTodoItem);
    list.addEventListener("click", boxChecked);
    btnClr.addEventListener("clear list", clearList);

}