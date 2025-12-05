const formulario = document.getElementById('formulario');

function validar(e) {

    var usuario,contrasena;
    usuario = document.getElementById("usuario").value;
    contrasena = document.getElementById("contrasena").value;

    if ( usuario === "" || contrasena === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }else if(usuario == "admin" && contrasena == "1111"){
        e.preventDefault();
        window.location.href = 'catalogo.html';
    }else{
        e.preventDefault();
        window.location.href = 'index(inicioSesion) .html';
    }
}

formulario.addEventListener('submit',validar);
