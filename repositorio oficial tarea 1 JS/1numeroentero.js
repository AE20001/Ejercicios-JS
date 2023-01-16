/**1.	Leer un número entero y determinar si tiene 3 dígitos. */

function numeroentero(numentero){
        if(numentero >=-999 && numentero <=-100){
            console.log("Ingrese un número entero de hasta tres dígitos o menos.");
            console.log("El numero ingresado es: "+numentero);


            console.log("El numero ingresado es de tres digito");
        }else{
        if(numentero >=-99 && numentero <=-10){
            console.log("Ingrese un número entero de hasta tres dígitos o menos.");
            console.log("El numero ingresado es: "+numentero);


            console.log("El numero ingresado es de dos digito"); 
        }else{
        if(numentero >=-9 && numentero <=9){
            console.log("Ingrese un número entero de hasta tres dígitos o menos.");
            console.log("El numero ingresado es: "+numentero);


            console.log("El numero ingresado es de un digito");    
    }else{
        if(numentero >=10 && numentero <=99){
            console.log("Ingrese un número entero de hasta tres dígitos o menos.");
            console.log("El numero ingresado es: "+numentero);


            console.log("El numero ingresado es de dos digito");
        }else{
            if(numentero >=100 && numentero <=999){
                console.log("Ingrese un número entero de hasta tres dígitos o menos.");
                console.log("El numero ingresado es: "+numentero);


                console.log("El numero ingresado es de tres digito")
            }else{
                console.log("Ingrese un número entero de hasta tres dígitos o menos.");
                console.log("El numero ingresado es: "+numentero);


                console.log("El numero ingresado es incorrecto");
            }
        }
    }
}
}
}

numeroentero(-900)
    