 const btnAumentar = document.getElementById("aumentar")
 const btnDisminuir = document.getElementById("disminuir")
 const seccion1=document.getElementById("seccion1")

 const btnSumar = document.getElementById("sumar")
 const btnRestar = document.getElementById("restar")
 const seccion2=document.getElementById("seccion2")

 const btnPoner = document.getElementById("poner")
 const btnQuitar = document.getElementById("quitar")
 const seccion3=document.getElementById("seccion3")

 let contador=1;
 const mostrarValor = document.getElementById("contador")

        btnAumentar.addEventListener ("click", function aumentaValor(){
            contador=contador+1;
            actuContador();
        })

        btnDisminuir.addEventListener ("click", function disminuirValor(){
            if(contador>0){
                contador=contador-1;
            } 
            actuContador();

            if(contador==0 || contador<0){
               seccion1.style.display='none'; 
            }
        })

 let contador1=1;
 const mostrarValor1 = document.getElementById("contador1")

        btnSumar.addEventListener ("click", function aumentaValor(){
            contador1=contador1+1;
            actuContador();
        })

        btnRestar.addEventListener ("click", function disminuirValor(){
            if(contador1>0){
                contador1=contador1-1;
            } 
            actuContador();

            if(contador1==0 || contador1<0){
               seccion2.style.display='none'; 
            }
        })

 let contador2=1;
 const mostrarValor2 = document.getElementById("contador2")

        btnPoner.addEventListener ("click", function aumentaValor(){
            contador2=contador2+1;
            actuContador();
        })

        btnQuitar.addEventListener ("click", function disminuirValor(){
            if(contador2>0){
                contador2=contador2-1;
            } 
            actuContador();

            if(contador2==0 || contador2<0){
               seccion3.style.display='none'; 
            }
        })


function actuContador(){
    mostrarValor.textContent = contador;
    mostrarValor1.textContent = contador1;
    mostrarValor2.textContent = contador2;
}
