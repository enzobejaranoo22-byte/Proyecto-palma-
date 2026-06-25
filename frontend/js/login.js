
function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje");


    if (email === "" || password === "") {

        mensaje.innerHTML = "Complete todos los campos";
        mensaje.style.color = "red";

        return;
    }


    let usuarioGuardado = localStorage.getItem("usuario");
    let claveGuardada = localStorage.getItem("clave");


    if (email === usuarioGuardado &&
        password === claveGuardada) {

        mensaje.innerHTML = "Bienvenido";
        mensaje.style.color = "green";


        localStorage.setItem("sesion", "activa");


        setTimeout(function () {

            window.location.href = "tareas.html";

        }, 1000);

    }

    else {

        mensaje.innerHTML = "Correo o contraseña incorrectos";
        mensaje.style.color = "red";


    }

}



function recuperarPassword() {

    let usuario = localStorage.getItem("usuario");

    if (usuario) {

        alert("Usuario registrado: " + usuario);

    }

    else {

        alert("No existe una cuenta");

    }

}
