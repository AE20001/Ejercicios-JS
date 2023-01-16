/*Ejercicio 1:
Crear una función con un parámetro llamado edad que permita calcular si una persona es mayor de 
edad o no. Utilizar para la condición el operador ternario.*/

/** 
 *SIN OPERADOR TERNARIO:
if(condicion){

}else{

}
    
EN OPERADOR TERMARIO:
condicion : "mensaje" ? "error"

*/

function adulto(edad){

    /**
     * ? = cuando acepta la condicion
     * : = si no acepta la condicion, hace otro proceso
     */

    edad > 18 ? console.log("Eres mayor de edad") : console.log("No eres mayor de edad");
}

adulto(12);