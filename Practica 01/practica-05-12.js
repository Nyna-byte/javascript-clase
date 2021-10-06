window.onload=iniciar;

function comprobar(direccion){
    var salida=document.forms["form-letras"].elements.mensaje;
    var letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú"];
    var numeros=["0", "1", "2", "3", "4", "5","6", "7", "8", "9"];
    var simbolos=["º",  "ª",  "/",  "-"];
    if(direccion.length<8 || direccion.length>42){
        salida.value="Longitud no válida";
    }
    else{
        if(letras.indexOf(direccion.charAt(0))==-1){
            salida.value="Debe empezar por letra";
        }
        else if(letras.indexOf(direccion.charAt(direccion.length-1))==-1 && numeros.indexOf(direccion.charAt(direccion.length-1))==-1){
            salida.value="Debe acabar en letra o número";
        }
        else{
            var valido=true;
            for(var i=0; i<direccion.length; i++){
                if(letras.indexOf(direccion.charAt(i))==-1 && numeros.indexOf(direccion.charAt(i))==-1 && simbolos.indexOf(direccion.charAt(i))==-1){
                    valido=false;
                }
            }
            if(!valido){
                salida.value="Dirección no válida";
            }
            else{
                salida.value="Dirección válida";
            }
        }
    }
}
function leer(){
    var cadena=document.forms["form-letras"].elements.direccion.value.toLowerCase();
    comprobar(cadena);
}
function iniciar(){
    document.forms["form-letras"].elements.boton.onclick=leer;
}