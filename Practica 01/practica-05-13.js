window.onload=iniciar;

function comprobar(palindromo){
    var salida=document.forms["form-letras"].elements.mensaje;
    palindromo=palindromo.split(" ").join("");
    console.log(palindromo);
    var reves="";
    for(var i=1; i<=palindromo.length; i++){
        reves+=palindromo.charAt(palindromo.length-i);
    }
    console.log(reves);
    if(palindromo==reves){
        salida.value="Es un palíndromo";
    }
    else{
        salida.value="No es un palíndromo"
    }
}
function leer(){
    var cadena=document.forms["form-letras"].elements.palindromo.value.toLowerCase();
    comprobar(cadena);
}
function iniciar(){
    document.forms["form-letras"].elements.boton.onclick=leer;
}