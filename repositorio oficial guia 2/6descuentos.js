/**Ejercicio 6:
Realizar una fuction para una tienda de coches en donde se deberá calcular: Si el coche a la venta es 
un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el coche a la venta es un FORD 
FOCUS, el descuento será del 10% y si es un FORD ESCAPE el descuento será del 20%. Deberá de 
usar un parámetro que permita identificar el tipo de coche y la fuction deberá demostrar el coche 
seleccionado */

function coche(tipo){
    if(tipo == "FORD FIESTA"){
        let precio = 2500;
        let descuento = precio - (precio * 0.05);
        console.log(
            "Coche: FORD FIESTA " + "\n" +
            "Descuento del195% " + "\n" +
            "Total de la compra: " + descuento
        )
    }else if(tipo == "FORD FOCUS"){
        let precio = 3100;
        let descuento = precio - (precio * 0.1);
        console.log(
            "Coche: FORD FOCUS " + "\n" +
            "Descuento del 10% " + "\n" +
            "Total de la compra: " + descuento
        )
    }else if(tipo == "FORD ESCAPE"){
        let precio = 4000;
        let descuento = precio - (precio * 0.2);
        console.log(
            "Coche: FORD ESCAPE " + "\n" +
            "Descuento del 20% " + "\n" +
            "Total de la compra: " + descuento
        )

}
}

coche("FORD ESCAPE");