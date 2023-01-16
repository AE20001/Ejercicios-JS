/**Ejercicio 2: 
Crear 3 Fuctions que calcule 2 números enteros y muestre en consola el resultado de la suma, resta,
multiplicación y división. Puede utilizar parámetros o variables locales para asignar valores a los 
números.
*/

function suma(a,b){
    let suma = a + b;
    console.log ("El resultado de la suma es: " + suma);
}

function resta(a,b){
    let resta = a - b;
    console.log ("El resultado de la resta es: " + resta);
}

function division(a,b){
    let division = a / b;
    console.log ("El resultado de la division es: " + division);
}

function multiplicacion(a,b){
    let multiplicacion = a * b;
    console.log ("El resultado de la multiplicacion es: " + multiplicacion);
}

suma(3,6);

resta(3,6);

division(3,6);
multiplicacion(3,6);