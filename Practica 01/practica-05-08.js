window.onload=iniciar;

function comprobar(fecha){
    var salida=document.forms["form-letras"].elements.mensaje;
    var arr=fecha.split("-");
    if(arr.length!==3){
        salida.value="La fecha debe contener un día, un mes y un año";
    }
    else if(arr[0].length<1 || arr[0].length>2){
        salida.value="Día no válido";
    }
    else if(parseInt(arr[0])<1 || parseInt(arr[0])>31){
            salida.value="El día debe ser un número válido";
    }
    else if(arr[1].length<1 || arr[1].length>2){
        salida.value="Mes no válido";
    }
    else if(parseInt(arr[1])<1 || parseInt(arr[1])>12){
        salida.value="El mes debe ser un número válido";
    }
    else if(arr[2].length!==4){
        salida.value="Año no válido";
    }
    else if(arr[2]<1000 || arr[2]>9999){
        salida.value="Año no válido";
    }
    else{
        salida.value="Fecha válida";
    }
    
}
function leer(){
    var cadena=document.forms["form-letras"].elements.fecha.value.toLowerCase();
    comprobar(cadena);
}
function iniciar(){
    document.forms["form-letras"].elements.boton.onclick=leer;
}