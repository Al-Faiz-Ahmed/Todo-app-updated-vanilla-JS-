var list = document.getElementById("list");
var identify = "";

function addTodo() {
  var toDo_item = document.getElementById("text");

  var li = document.createElement("li");
  if (toDo_item.value !== "") {
    var rondomID = "rondom" + Math.ceil(Math.random() * 1000);
    var liText = document.createTextNode(toDo_item.value);
    li.setAttribute("id", rondomID);
    li.appendChild(liText);
    list.appendChild(li);
    toDo_item.value = "";
  }

  // // delete buton
  var delbtn = document.createElement("button");
  var deltbtntext = document.createTextNode("Delete");
  delbtn.appendChild(deltbtntext);
  li.appendChild(delbtn);
  delbtn.setAttribute("onclick", "deleteItem(this,)");

  // // edit btn
  var editBtn = document.createElement("button");
  var editText = document.createTextNode("Edit");
  editBtn.appendChild(editText);
  li.appendChild(editBtn);
  editBtn.setAttribute("onclick", "editItem(this)");
}

//Function for Delete All Lists
function deleteAll() {
  list.innerHTML = "";
}

//Function for Delete a list
function deleteItem(e) {
  e.parentNode.remove();
}

var elem;
//Funcyion for edit a list
function editItem(e) {
  var deleteAll = document.getElementById("deleteAll");
  var AddItem = document.getElementById("addItem");
  var toDo_item = document.getElementById("text");
  identify = e.parentNode.id;
  deleteAll.style.display = "none";
  AddItem.innerHTML = "Save";
  AddItem.setAttribute("onclick", "saveList()");
  var lisarr = list.childNodes;

  var Listval = e.parentNode.firstChild.nodeValue;
  toDo_item.value = Listval;

  for (var i = 0; i < lisarr.length; i++) {
    if (lisarr[i].nodeType === 1 && e.parentNode.id !== lisarr[i].id) {
      lisarr[i].lastChild.remove();
    }
  }
  e.parentNode.innerHTML = "Correcting List";
}

// Function for edit or update a list
function saveList() {
  var deleteAll = document.getElementById("deleteAll");
  var AddItem = document.getElementById("addItem");
  var value = document.getElementById("text").value;

  if (value !== "") {
    var lisarr = list.childNodes;
    for (var i = 0; i < lisarr.length; i++) {
      // console.log(lisarr[i].childNodes[1]);

      if (lisarr[i].nodeType === 1 && identify === lisarr[i].id) {
        lisarr[i].innerHTML = value;

        // // delete buton
        var delbtn = document.createElement("button");
        var deltbtntext = document.createTextNode("Delete");
        delbtn.appendChild(deltbtntext);
        lisarr[i].appendChild(delbtn);
        delbtn.setAttribute("onclick", "deleteItem(this)");

        //   // // edit btn
        var editBtn = document.createElement("button");
        var editText = document.createTextNode("Edit");
        editBtn.appendChild(editText);
        lisarr[i].appendChild(editBtn);
        editBtn.setAttribute("onclick", "editItem(this)");

        AddItem.innerHTML = "Add Item";
        AddItem.setAttribute("onclick", "addTodo(this)");

        deleteAll.style.display = "inline";
      }
    }
  }
}
