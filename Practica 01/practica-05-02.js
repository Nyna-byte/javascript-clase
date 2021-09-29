window.onload=imprimir;


function esPrimo(num){
    for(var i=2; i<num; i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
function imprimir(){
    var lista= "1|2|";
    var contador=0;
    var i=3;
    while(contador<100){
        if(esPrimo(i)){
            lista+=(i+"|");
        }
        contador++;
        i+=2;
    }
    var textarea=document.forms["form-primos"].elements.numprimos;
    textarea.value=lista;
}

