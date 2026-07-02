// ===============================
// PROYECTO PALMA - TAREAS
// ===============================
window.onload = function () {
    cargarTareas();
};
// Agregar tarea
function agregartarea() {
    let texto = document.getElementById("nuevatarea").value.trim();
    let fecha = document.getElementById("fechatarea").value;
    if (texto === "") {
        alert("Ingrese una tarea");
        return;
    }
    let tarea = {
        texto: texto,
        fecha: fecha,
        completada: false
    };
    crearTarea(tarea);
    guardarTareas();
    actualizarRecordatorios();
    document.getElementById("nuevatarea").value = "";
    document.getElementById("fechatarea").value = "";
}
// Crear elemento visual
function crearTarea(tarea) {
    let li = document.createElement("li");
    if (tarea.completada) {
        li.classList.add("completada");
    }
    let hoy = new Date().toISOString().split("T")[0];
    if (tarea.fecha != "") {
        if (tarea.fecha < hoy) {
            li.classList.add("vencida");
        }
        if (tarea.fecha == hoy) {
            li.classList.add("hoy");
        }
    }
    let texto = document.createElement("span");
    texto.innerHTML =
        "<strong>" + tarea.texto + "</strong><br>📅 " +
        (tarea.fecha == "" ? "Sin fecha" : tarea.fecha);
    li.appendChild(texto);
    // Botón completar
    let btnCompletar = document.createElement("button");
    btnCompletar.innerHTML = "✔";
    btnCompletar.onclick = function () {
        li.classList.toggle("completada");
        guardarTareas();
    };
    li.appendChild(btnCompletar);
    // Botón eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = "❌";
    btnEliminar.onclick = function () {
        li.remove();
        guardarTareas();
        actualizarRecordatorios();
    };
    li.appendChild(btnEliminar);
    document.getElementById("listatareas").prepend(li);
}
// Guardar en localStorage
function guardarTareas() {
    let lista = [];
    document.querySelectorAll("#listatareas li").forEach(function (li) {
        let texto = li.querySelector("strong").innerText;
        let fecha = li.querySelector("span").innerHTML
            .replace("<strong>" + texto + "</strong><br>📅 ", "");
        lista.push({
            texto: texto,
            fecha: fecha == "Sin fecha" ? "" : fecha,
            completada: li.classList.contains("completada")
        });
    });
    localStorage.setItem("tareas", JSON.stringify(lista));
}
// Cargar tareas
function cargarTareas() {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.forEach(function (tarea) {
        crearTarea(tarea);
    });
    actualizarRecordatorios();
}
// Recordatorios
function actualizarRecordatorios() {
    let lista = document.getElementById("recordatorios");
    lista.innerHTML = "";
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    if (tareas.length == 0) {
        let li = document.createElement("li");
        li.innerHTML = "No hay recordatorios.";
        lista.appendChild(li);
        return;
    }
    tareas.forEach(function (tarea) {
        if (!tarea.completada) {
            let li = document.createElement("li");
            li.innerHTML =
                "🔔 " + tarea.texto +
                (tarea.fecha == "" ? "" : " (" + tarea.fecha + ")");
            lista.appendChild(li);
        }
    });
}