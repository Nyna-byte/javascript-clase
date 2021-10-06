window.onload=iniciar;

function comprobar(localidad){
    var salida=document.forms["form-letras"].elements.mensaje;
    var letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú"];
    if(localidad.length<7 || localidad.length>35){
        salida.value="Longitud no válida";
    }
    else{
        valido=true;
        for(var i=0; i<3; i++){
            if(letras.indexOf(localidad.charAt(i))==-1){
                valido=false;
            }
        }
        if(!valido){
            salida.value="Debe empezar por 3 letras";
        }
        else{
            localidad=localidad.slice(3);
            for(var i=0; i<localidad.length; i++){
                if(letras.indexOf(localidad.charAt(i))==-1 && localidad.charAt(i)!=" "){
                    valido=false;
                }
            }
            if(!valido){
                salida.value="Localidad no válida";
            }
            else{
                for(var i=1; i<=2; i++){
                    if(letras.indexOf(localidad.charAt(localidad.length-i))==-1){
                        valido=false;
                    }
                }
                if(!valido){
                    salida.value="Debe acabar por 2 letras";
                }
                else{
                    salida.value="Localidad válida";
                }
            }
        }
    }
}
function leer(){
    var cadena=document.forms["form-letras"].elements.localidad.value.toLowerCase();
    comprobar(cadena);
}
function iniciar(){
    document.forms["form-letras"].elements.boton.onclick=leer;
}