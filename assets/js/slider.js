/* ---------------------DECLARACION DE VARIOABLES----------------------------- */
var numfotos=12
var ordenprincipal
var ordensiguiente
var intervalo
var tiempoespera=5000


/* declaracion de constantes */
const flechaIzd=document.getElementById("flechaIzd")
const flechaDer=document.getElementById("flechaDer")
const fotoActiva=document.getElementById("fotoActiva")

/*---------------------EVENTO ESCUCHA FLECHAS----------------------------------*/
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
    crearIntervalo(tiempoespera+2000)

})

/* escuchamos click flecha derecha */
flechaDer.addEventListener("click",function(){
    ordenprincipal=fotoActiva.getAttribute("orden") /* conoce el orden */
    ordenprincipal=Number(ordenprincipal) /* "texto" aqui lo pasa a numero */
    if(ordenprincipal===numfotos){
        ordensiguiente=1
    }else{
        ordensiguiente=ordenprincipal+1
    }
    fotoActiva.src=`./assets/img/slider${ordensiguiente}_2560.jpg`
    fotoActiva.setAttribute("orden",ordensiguiente)
    crearIntervalo(tiempoespera+2000)

})



/* imagen random al cargar, lo hemos pasado a funcion y al toner nada delante se carga al refrescar */
funcion_random ()

/* AutoPlay - cambia de imagen cada 5 segundos */
crearIntervalo(tiempoespera)

/*---------------------------ZONA DE FUNCIONES----------------------------------- */

function funcion_random (){
    let numaleatorio
    /*IMAGEN RANDOM AL CARGAR LA WEB ( sin listener )*/
    /* tipar la variable a numero */
    numaleatorio=Number(numaleatorio)
    /* conseguir numero aleatorio */
    numaleatorio=Math.random()*numfotos
    /* redondear numero */
    numaleatorio=Math.ceil(numaleatorio)
    /* añadir el numero aleatorio a la foto activa */
    fotoActiva.src=`./assets/img/slider${numaleatorio}_2560.jpg`
    fotoActiva.setAttribute("orden",numaleatorio)   
}

/* AutoPlay - camnbio automatico de imagenes cada X segundos */
function crearIntervalo(tiempoespera){
    if(intervalo != undefined){
        clearInterval(intervalo)
    }
    intervalo=window.setInterval(funcion_random,tiempoespera)
}

console.log(numaleatorio)