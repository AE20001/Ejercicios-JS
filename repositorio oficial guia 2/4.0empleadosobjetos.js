let empleados = [
    //posicion[0][1]
    {
        "nombre": "Karina Chavez", //subposicion[0] y asi sucesivamente
        "salario": 500, //subposicion[1]
        "categoria": "A" //subposicion[2]
    },
//posicion[1][2]
    {
        "nombre": "Juan Mendez", 
        "salario": 570,
        "categoria": "B"
    },
//posicion[2]

    {
        "nombre": "Sandra Murcia",
        "salario": 625,
        "categoria": "C"
    },
//posicion[3]

    {
        "nombre": "Kevin Landaverde",
        "salario": 700,
        "categoria": "D"
    }
]

/**trabajando con la estructura foreach */
empleados.forEach(elemento_empleado => {
    //console.log(elemento_empleado.categoria);
    if(elemento_empleado.categoria == "A"){
        salario = (elemento_empleado.salario * 0.15) + elemento_empleado.salario;
        console.log(
            "Nombre del empleado: " + elemento_empleado.nombre + "\n" +
            "Categoria " + elemento_empleado.categoria + "\n" +
            "Sueldo base: $" + elemento_empleado.salario + "\n" +
            "Sueldo total: $" + salario
        );
    }else if(elemento_empleado.categoria == "B"){
        salario = (elemento_empleado.salario * 0.30) + elemento_empleado.salario;
        console.log(
            "Nombre del empleado: " + elemento_empleado.nombre + "\n" +
            "Categoria " + elemento_empleado.categoria + "\n" +
            "Sueldo base: $" + elemento_empleado.salario + "\n" +
            "Sueldo total: $" + salario
        )
    }else if(elemento_empleado.categoria == "C"){
        salario = (elemento_empleado.salario * 0.10) + elemento_empleado.salario;
        console.log(
            "Nombre del empleado: " + elemento_empleado.nombre + "\n" +
            "Categoria " + elemento_empleado.categoria + "\n" +
            "Sueldo base: $" + elemento_empleado.salario + "\n" +
            "Sueldo total: $" + salario
        )
        }else if(elemento_empleado.categoria == "D"){
        salario = (elemento_empleado.salario * 0.20) + elemento_empleado.salario;
        console.log(
            "Nombre del empleado: " + elemento_empleado.nombre + "\n" +
            "Categoria " + elemento_empleado.categoria + "\n" +
            "Sueldo base: $" + elemento_empleado.salario + "\n" +
            "Sueldo total: $" + salario
        )
    }
})