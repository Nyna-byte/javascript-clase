window.onload=iniciar;

function comprobar(url){
    var salida=document.forms["form-letras"].elements.mensaje;
    var letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú"];
    var numeros=["0", "1", "2", "3", "4", "5","6", "7", "8", "9"];
    var guion=["-"];
    if(url.startsWith("https://")){
        url=url.replace("https://", "");
    }
    else if(url.startsWith("http://")){
        url=url.replace("http://", "");
    }
    if(!url.startsWith("www.")){
        salida.value="La URL debe empezar por www.";
    }
    else{
        url=url.replace("www.", "");
        if(letras.indexOf(url.charAt(0))==-1){
            salida.value="Debe empezar por letra";
        }
        else{
            var arr=url.split(".");
            var valido=true;
            for(var i=0; i<arr[0].length; i++){
                if(letras.indexOf(arr[0].charAt(i))==-1 && numeros.indexOf(arr[0].charAt(i))==-1 && guion.indexOf(arr[0].charAt(i))==-1){
                    valido=false;
                }
            }
            if(!valido){
                salida.value="URL no válida";
            }
            else if(letras.indexOf(arr[0].charAt(arr[0].length-1))==-1 && numeros.indexOf(arr[0].charAt(arr[0].length-1))==-1){
                salida.value="La URL debe acabar en número o letra";
            }
            else if(arr[1].length<2 || arr[1].length>4){
                salida.value="Longitud del dominio inválida";
            }
            else{
                var domValido=true;
                for(var i=0; i<arr[1].length; i++){
                    if(letras.indexOf(arr[1].charAt(i))==-1 && domValido==true){
                        domValido=false;
                    }
                }
                if(!domValido){
                    salida.value="Dominio no válido";
                }
                else{
                    salida.value="URL válida";
                }
            }
        }
    }
}
function leer(){
    var cadena=document.forms["form-letras"].elements.url.value.toLowerCase();
    comprobar(cadena);
}
function iniciar(){
    document.forms["form-letras"].elements.boton.onclick=leer;
}