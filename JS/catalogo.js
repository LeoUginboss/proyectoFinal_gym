//Event listener botones
document.getElementById('btnAgregarProducto').addEventListener("click", agregarProducto);
document.getElementById('btnGuardarProducto').addEventListener("click", guardarProducto);
document.getElementById('btnActualizar').addEventListener("click", actualizarProducto);

//ocultar formularios
document.getElementById('datosAgregar').style.display = 'none';
document.getElementById('actualizarP').style.display = 'none';

let productoSeleccionado;
let base64String = "";

//mostrar el formulario de agregar producto
function agregarProducto() {
    document.getElementById('datosAgregar').style.display = 'block';
}

function guardarImagen(file, callback) {
    let reader = new FileReader();

    reader.onload = function () {
        callback(reader.result);
    }
    reader.readAsDataURL(file);
}



function guardarProducto() {
    const nombreP = document.getElementById('nombreP').value;
    const precioP = document.getElementById('precioP').value;
    const fotoP = document.getElementById('fotoP').files[0];

    if (precioP < 0) {
        document.getElementById('mensaje').innerHTML = `Cantidad Invalida`;
        document.getElementById('nombreP').value = "";
        document.getElementById('precioP').value = "";
        document.getElementById('fotoP').value = "";
    } else {

        guardarImagen(fotoP, function (imagenBase64) {
            document.getElementById('mensaje').innerHTML = "";
            const producto = { nombreP, precioP, imagenP: imagenBase64 };

            let productos = JSON.parse(localStorage.getItem("productos")) || [];
            productos.push(producto);
            localStorage.setItem("productos", JSON.stringify(productos));

            mostrarProducto();
            document.getElementById('datosAgregar').style.display = 'none';
        });

        document.getElementById('nombreP').value = "";
        document.getElementById('precioP').value = "";
        document.getElementById('fotoP').value = "";
    }
    
}

function mostrarProducto() {
    const catalogo = document.getElementById('mostrarCatalogo');
    const producto = JSON.parse(localStorage.getItem("productos")) || [];
    let card = "";

    producto.forEach((u, index) => {
        card += `<div class="col-md-4 mb-3">
        <div class="card" style="width: 18rem;">
                    <img src="${u.imagenP}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title"><b>${u.nombreP}</b></h5>
                        <p class="card-text">$${u.precioP}</p>
                        <input id="btnSeleccionar" type="button" value="Seleccionar" onclick="editarProducto(${index})">
                        <input id="btnEliminar" type="button" value="Eliminar" onclick="eliminarProducto(${index})">
                    </div>
                </div> 
                </div>`;
    });
    catalogo.innerHTML = card;
}

function editarProducto(index) {
    const productos = JSON.parse(localStorage.getItem('productos'));
    const producto = productos[index];
    productoSeleccionado = index;

    document.getElementById('precioPro').value = producto.precioP;

    document.getElementById('actualizarP').style.display = 'block';

}

function actualizarProducto() {
    const precioPro = document.getElementById('precioPro').value;

    let productos = JSON.parse(localStorage.getItem("productos")) || [];

    if(precioPro<0){
        document.getElementById('mensaje2').innerHTML = `Cantidad Invalida`;
        document.getElementById('precioPro').value = "";
    }else{
    productos[productoSeleccionado].precioP = precioPro;
    localStorage.setItem("productos", JSON.stringify(productos));
    document.getElementById('actualizarP').style.display = 'none';
    productoSeleccionado = null;
    mostrarProducto();
    document.getElementById('mensaje2').innerHTML = "";
    }
}

function eliminarProducto(index) {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos.splice(index, 1);
    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarProducto();
}



mostrarProducto();