var storedItem = localStorage.getItem("storedItem")

function save(){
    var Item = document.getElementById("task").value;
    localStorage.setItem("storedItem", Item);
    document.getElementById("savedText").innerHTML = Item + "Saved";
}

function get(){
    localStorage.getItem("storedItem");
    document.getElementById("openedText").innerHTML = storedItem + " Opened";
}

