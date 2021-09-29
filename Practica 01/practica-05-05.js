window.onload=iniciar;

function contVocal(frase){
    var contar=(frase.match(/[aeiou]/gi)||[]).length;
    var salida=document.forms["form-letras"].elements.vocales;
    salida.value=contar;
}
function contConsonante(frase){
    var contar=(frase.match(/[bcdfghjklmnñpqrstvwxyz]/gi)||[]).length;
    var salida=document.forms["form-letras"].elements.consonantes;
    salida.value=contar;
}
function leer(){
    var cadena=document.forms["form-letras"].elements.cadena.value;
    contVocal(cadena);
    contConsonante(cadena);
}
function iniciar(){
    document.forms["form-letras"].elements.boton.onclick=leer;
}