/**Ejercicio 
2.	En un cierto país el impuesto que se debe pagar por artículos importados se calcula mediante las siguientes reglas:*/

function importaciones(num){
    if(precio =  (num < 20) ){
        console.log(
            "Precio de artículo de importación:  $" +num+ "\n"+
            "Este artículo no genera impuesto ")
        
    }else if(precio =  (num > 20.01, num < 40)){
        let impuesto = num * 0.3;
        console.log(
            "Precio de artículo de importación:  $" +num+ "\n"+
            "Su impuesto es del 30% " + "\n" +
            "Total impuesto: " + impuesto
        )
    }else if(precio =  (num > 40.01, num < 500)){
        let impuesto = num * 0.4;
        console.log(
            "Precio de artículo de importación:  $" +num+ "\n"+
            "Su impuesto es del 40% " + "\n" +
            "Total impuesto: " + impuesto
        )
    }else{
        let impuesto = num * 0.5;
        console.log(
            "Precio de artículo de importación:  $" +num+ "\n"+
            "Su impuesto es del 50% " + "\n" +
            "Total impuesto: " + impuesto
        )

}
}

importaciones(10);