let button = document.querySelector("button");
let list = document.querySelector("ul");
let todo = document.querySelector("#todo")

button.addEventListener("click",(e)=>{
    e.preventDefault();
    if (todo.value.length > 3){
        listItem = document.createElement("li");
        listItem.innerText = todo.value;
        list.appendChild(listItem);
        document.querySelector("form").reset()
    }
})

list.addEventListener("click",(event)=>{
    event.preventDefault();
    event.target.remove();
})