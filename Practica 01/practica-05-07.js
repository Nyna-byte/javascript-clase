window.onload=iniciar;

function comprobar(frase,subcadena){
    var reg = new RegExp(subcadena,"g");
    var contar=(frase.match(reg)||[]).length;
    
    var salida=document.forms["form-letras"].elements.mensaje;
    salida.value=contar;
}
function leer(){
    var cadena=document.forms["form-letras"].elements.cadena.value;
    var subcadena=document.forms["form-letras"].elements.vocalsub.value;
    comprobar(cadena, subcadena);
}
function iniciar(){
    document.forms["form-letras"].elements.boton.onclick=leer;
}