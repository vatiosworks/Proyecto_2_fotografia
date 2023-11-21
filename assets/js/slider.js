/* DECLARACION DE VARIOABLES */
var numfotos=12
var ordenprincipal
var ordensiguiente
var intervalo,temporizadorder
var tiempoespera=5000

/* declaracion de constantes */
const flechaIzd=document.getElementById("flechaIzd")
const flechaDer=document.getElementById("flechaDer")
const fotoActiva=document.getElementById("fotoActiva")

/*CODIGO PARA LA ACCION DE LAS FLECHAS*/
/* escuchamos click flecha izquierda */
flechaIzd.addEventListener("click",function(){
    ordenprincipal=fotoActiva.getAttribute("orden")
    ordenprincipal=Number(ordenprincipal)
    if(ordenprincipal===1){
        ordensiguiente=numfotos
    }else{
        ordensiguiente=ordenprincipal-1
    }
    fotoActiva.src=`./assets/img/slider${ordensiguiente}_2560.jpg`
    fotoActiva.setAttribute("orden",ordensiguiente)
})

console.log(fotoActiva);