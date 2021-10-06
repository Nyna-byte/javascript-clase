window.onload=iniciar;

function comprobar(email){
    var salida=document.forms["form-letras"].elements.mensaje;
    var letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú"];
    var simbolos=[".", "-"];
    var numeros=["0", "1", "2", "3", "4", "5","6", "7", "8", "9"];
    if(letras.indexOf(email.charAt(0))==-1){
        salida.value="El email debe empezar por letra";
    }
    else{
        var arr=email.split("@");
        if(letras.indexOf(arr[0].charAt(-1))==-1 || numeros.indexOf(arr[0].charAt(-1))==-1){
            salida.value="El caracter antes del @ debe ser una letra o número";
        }
        else if(letras.indexOf(arr[1].charAt(0))==-1){
            salida.value="El caracter después del @ debe ser una letra";
        }
        else{
            for(var i=0; i<arr[0].length; i++){
                if(letras.indexOf(arr[0].charAt(i))==-1 && simbolos.indexOf(arr[0].charAt(i))==-1 && numeros.indexOf(arr[0].charAt(i))==-1){
                    salida.value="El correo contiene caracteres no válidos"
                }
                else{
                    var arr2=att[1].split(".");
                    if(letras.indexOf(arr2[0].charAt(-1))==-1 || numeros.indexOf(arr2[0].charAt(-1))==-1){
                        salida.value="El caracter antes del punto debe ser una letra o número";
                    }
                    else if(arr2[1].length()<2 || arr2[1].length()>4){
                        salida.value="El dominio debe tener entre 2 y 4 letras"
                    }
                    else{
                        for(var i=0; i<arr2[1].length; i++){
                            if(letras.indexOf(arr2[0].charAt(i))==-1){
                                salida.value="El dominio solo pueden ser letras";
                            }
                        }
                        salida.value="Email válido";
                    }
        
                }
            }
        }
        
    }
    
    
}
function leer(){
    var cadena=document.forms["form-letras"].elements.email.value.toLowerCase();
    comprobar(cadena);
}
function iniciar(){
    document.forms["form-letras"].elements.boton.onclick=leer;
}