const formulario = document.getElementById('formulario');

function validar() {

    var nombre, correo, telefono, usuario, contrasena, contrasenaC;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    usuario = document.getElementById("usuario").value;
    contrasena = document.getElementById("contrasena").value;
    contrasenaC = document.getElementById("contrasenaC").value;

    if (nombre === "" || correo === "" || telefono === "" || usuario === "" || contrasena === "" || contrasenaC === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    if (contrasena !== contrasenaC) {
        alert("La contraseñas no coinciden.");
        return false;
    }

    return true;
}


formulario.addEventListener('submit', (e) => {
    if (validar()) {
        e.preventDefault();
        window.location.href = 'login.html';
    }else{

    }
});










