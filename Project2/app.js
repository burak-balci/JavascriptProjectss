let list = document.querySelector("#list")
let addButton = document.querySelector("#liveToastBtn")
let task = document.querySelector("#task")

window.addEventListener("load",load)


function newElement(){
    let value = document.querySelector("#task").value.trim()
    if(value.length > 0){
        let listItem = newTodo(value)
        list.appendChild(listItem);
        task.value = ""
        localStorage.setItem("todo",list.innerHTML)
        $('.success').toast("show")
    }else{
        $('.error').toast("show")
    }

}

function newTodo(value){
    let listElement = document.createElement("li")
    listElement.textContent = value
    listElement.classList.add("list-item")
    listElement.innerHTML += value + '<span class="close">x</span></li>'
    listElement.firstElementChild.addEventListener("click",removeList)
    return listElement
}


function removeList(e){
    e.target.parentElement.remove()
    localStorage.setItem("todo",list.innerHTML)

}
function deleteTodo(id){
    document.querySelector("#list").removeChild(id);
    document.querySelector("#task").value = ""
    localStorage.setItem("todo",list.innerHTML)
}

function load() {
    let memory = localStorage.getItem("todo")
    if (memory){
        list.innerHTML = memory


    }
}




