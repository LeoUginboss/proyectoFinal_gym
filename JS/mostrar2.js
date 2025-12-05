function mostrarCatalogo(){
    const catalogo = document.getElementById('mostrarCatalogo3'); //poner id
    const producto = JSON.parse(localStorage.getItem("productos")) || [];
    let card = "";

    producto.forEach(u => {
        card += `<div class="col-md-4 mb-3">
        <div class="card" style="width: 18rem;">
                    <img src="${u.imagenP}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title"><b>${u.nombreP}</b></h5>
                        <p class="card-text">$${u.precioP}</p>
                    </div>
                </div> 
                </div>`;
    });
    catalogo.innerHTML = card;
}

mostrarCatalogo();