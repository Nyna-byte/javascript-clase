window.onload=iniciar;

function esPrimo(num){
    for(var i=2; i<num; i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
function imprimir(min, max){
    var lista= " ";
    for(var i=min; i<=max; i++){
        if(esPrimo(i)){
            lista+=(i+"|");
        }
    }
    var salida=document.forms["form-primos"].elements.numprimos;
    salida.value=lista;
}
function leer(){
    var inicio=parseInt(document.forms["form-primos"].elements.inicial.value,10);
    var fin=parseInt(document.forms["form-primos"].elements.final.value,10);
    imprimir(inicio, fin);
}
function iniciar(){
    document.forms["form-primos"].elements.boton.onclick=leer;
}
