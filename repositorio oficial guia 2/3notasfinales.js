function promedio_estudiante(nombre, carnet, examen, tarea, asistencia, investigacion){
    let promedio = 0;
    examen = examen * 0.20;
    tarea = tarea * 0.40;
    asistencia = asistencia * 0.10;
    investigacion = investigacion * 0.30;

    promedio = examen + tarea + asistencia + investigacion;
    if(promedio > 6){
    console.log(
        "Querido estudiante" + nombre + "con el numero de carnet " +carnet + "has aprobado con promedio de "
        +promedio + "\n" + "Felicicidades"
    );
}else{
    console.log("Querido estudiante " + nombre + " con el numero de carnet " +carnet + " No has aprobado con promedio de "
    + promedio);
}
}

promedio_estudiante("Juan", "wsd566", 5,9,7,8);