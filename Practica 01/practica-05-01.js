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
    for(var i=3; i<100; i+=2){
        if(esPrimo(i)){
            lista+=(i+"|");
        }
    }
    var textarea=document.forms["form-primos"].elements.numprimos;
    textarea.value=lista;
}


