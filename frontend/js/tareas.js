function agregartarea() {
    let tarea= document.getElementById("nuevatarea").value;
    if(tarea=== "") {
        alert("ingrese una nueva tarea");
        return;
    }
    let li = document.createElement("li");
    li.textContent = tarea;
    document.getElementById("listatareas").appendChild(li);
    document.getElementById("nuevatarea").value = "";
}
