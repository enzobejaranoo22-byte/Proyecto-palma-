function registrar() {

    let email =
    document.getElementById("nuevoEmail").value;

    let password =
    document.getElementById("nuevaPassword").value;

    let mensaje =
    document.getElementById("mensajeRegistro");


    if (email === "" || password === 

"") {

        mensaje.innerHTML = "Complete todos los campos";
        mensaje.style.color = "red";
        return;
    }


    localStorage.setItem("usuario", email);

    localStorage.setItem("clave", password);


    mensaje.innerHTML = "Cuenta creada";
    mensaje.style.color = "green";



    setTimeout(function(){

        window.location.href = "login.html";

    },1000);
}
