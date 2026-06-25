
function agregartarea() {
    let tarea = document.getElementById("nuevatarea").value;

    if (tarea == "") {
        alert("ingrese una nueva tarea");
        return;
    }

    crearTarea(tarea);

    guardarTareas();

    document.getElementById("nuevatarea").value = "";
}


// función para crear tarea con botón borrar
function crearTarea(texto) {
    let li = document.createElement("li");
    li.textContent = texto;

    let botonBorrar = document.createElement("button");
    botonBorrar.textContent = " ❌";

    botonBorrar.onclick = function () {
        li.remove();
        guardarTareas(); // actualiza localStorage
    };

    li.appendChild(botonBorrar);


    document.getElementById("listatareas").prepend(li);
}

// guardar tareas
function guardarTareas() {
    let lista = [];

    let tareas = document.querySelectorAll("#listatareas li");

    tareas.forEach(function(item) {
        // saca el texto sin incluir la X del botón
        let texto = item.firstChild.textContent;

        lista.push(texto);
    });

    localStorage.setItem("tareas", JSON.stringify(lista));
}

// cargar tareas al abrir página
function cargarTareas() {
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];

    tareasGuardadas.forEach(function(tarea) {
        crearTarea(tarea);
    });
}


// ejecutar al iniciar
window.onload = function () {
    cargarTareas();
}
