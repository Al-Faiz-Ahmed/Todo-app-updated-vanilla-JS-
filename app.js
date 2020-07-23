
var list = document.getElementById("list")
function addTodo(){
    var toDo_item = document.getElementById("text");

    var li = document.createElement('li');
    var liText = document.createTextNode(toDo_item.value)

    li.appendChild(liText)
    list.appendChild(li)
    
    toDo_item.value = ""

// // delete buton
var delbtn = document.createElement("button")
var deltbtntext = document.createTextNode("Delete")
delbtn.appendChild(deltbtntext)
li.appendChild(delbtn)
delbtn.setAttribute("onclick","deleteItem(this)")

// // edit btn
var editBtn = document.createElement("button");
var editText = document.createTextNode("Edit")
editBtn.appendChild(editText)
li.appendChild(editBtn)
editBtn.setAttribute("onclick","editItem(this)")
}

function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var ediValue = prompt("Enter edit value",val)

    e.parentNode.firstChild.nodeValue = ediValue
}

function deleteAll(){
    list.innerHTML= ""
}