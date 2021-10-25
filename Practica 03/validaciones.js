function esNif(nif){
    var letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    var resultado=1;
    if(nif.length>9 && nif.length<7){
        resultado=0;
    }
    else if(nif.length<9 && nif.length>=7){
        resultado=3;
    }
    if(nif.charAt(0)==NaN && resultado==1){
        switch(nif.charAt(0)){
            case Y: nif.replace("Y", "1"); break;
            case Z: nif.replace("Z", "2"); break;
            case X: nif=nif.slice(1); break;
            case L: nif=nif.slice(1); break;
            case K: nif=nif.slice(1); break;
            case M: nif=nif.slice(1); break;
            default: resultado=0;
        }
    }
    if(resultado!=0){
        var control=nif.charAt(nif.length-1);
        if(letras.indexOf(control)==-1){
            resultado=2;
        }
        if(resultado==1){
            var suma=0;
            for(var i=0; i<nif.length-1 && resultado==1; i++){
                if(nif.charAt(i)==NaN){
                    resultado=0;
                }
                else{
                    suma+=parseInt(nif.charAt(i));
                }
            }
            suma=suma%23;
            if(suma>=letras.length && resultado==1){
                resultado=2;
            }
            else if(letras[suma]!=control && resultado==1){
                resultado=2;
            }
        }
        else if(resultado==3){
            nif=nif.slice(nif.length-1);
            if(parseInt(nif)<100000){
                resultado=2;
            }
        }
    }
    return resultado;
}

function esCif(cif){
    var letras1=["J","A","B","C","D","E","F","G","H","U","V"];
    var letras2=["P","Q","R","S","W"];
    var resultado=1;
    if(cif.length!=9){
        resultado=0;
    }


    return resultado;
}
