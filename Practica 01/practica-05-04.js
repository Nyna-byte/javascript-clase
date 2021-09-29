window.onload=iniciar;

function aBinario(num){
    var resultado=Number(num).toString(2);
    var salida=document.forms["form-numeros"].elements.binario;
    salida.value=resultado;
}
function aOctal(num){
    var resultado=Number(num).toString(8);
    var salida=document.forms["form-numeros"].elements.octal;
    salida.value=resultado;
}
function aHexadecimal(num){
    var resultado=Number(num).toString(16);
    var salida=document.forms["form-numeros"].elements.hexadecimal;
    salida.value=resultado;
}
function leer(){
    var numero=parseInt(document.forms["form-numeros"].elements.decimal.value,10);
    aBinario(numero);
    aOctal(numero);
    aHexadecimal(numero);
}
function iniciar(){
    document.forms["form-numeros"].elements.boton.onclick=leer;
}
