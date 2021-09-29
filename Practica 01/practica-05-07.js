window.onload=iniciar;

function comprobar(frase){
    var salida=document.forms["form-letras"].elements.mensaje;
    var letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","º","ª"," ","-"];
    if(frase.length<3){
        salida.value="Nombre demasiado corto";
    }
    else if(frase.length>27){
        salida.value="Nombre demasiado largo";
    }
    else if(letras.indexOf(frase.charAt(0))==-1){
        salida.value="Tiene que comenzar por letra";
    }
    else if(letras.indexOf(frase.charAt(frase.length-1))==-1){
        salida.value="Tiene que acabar por letra";
    }
    else{
        salida.value="Nombre válido";
    }
}
function leer(){
    var cadena=document.forms["form-letras"].elements.nombre.value.toLowerCase();
    comprobar(cadena);
}
function iniciar(){
    document.forms["form-letras"].elements.boton.onclick=leer;
}
