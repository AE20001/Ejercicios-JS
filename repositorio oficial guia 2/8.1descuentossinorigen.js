/**Ejercicio 8:
Crear una Fuction para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente: Si el 
usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será
de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el 
descuento será del 15% */

function viajes_turisticos(costoviaje){
    var ciudadorigen = 'Palma'
    if (ciudadorigen == 'Palma'){
        var ciudaddestino = 'Triunfo'
        switch (ciudaddestino) {
            case 'Panchimalco' :
                var descuento
                descuento = costoviaje - (costoviaje * 0.1)
                console.log('El cliente es de :' +ciudadorigen)
                console.log('Su destino sera: '+ciudaddestino)
                console.log('Su destino posee descuento del 10%: ' +descuento)

                break;

                case 'Triunfo' :
                    var descuento
                    descuento = costoviaje - (costoviaje * 0.15)
                    console.log('El cliente es de :' +ciudadorigen)
                    console.log('Su destino sera: '+ciudaddestino)
                    console.log('Su destino posee descuento del 15%: ' +descuento)
    
                    break;

                    case 'Costa del Sol' :
                        var descuento
                        descuento = costoviaje - (costoviaje * 0.05)
                        console.log('El cliente es de :' +ciudadorigen)
                        console.log('Su destino sera: '+ciudaddestino)
                        console.log('Su destino posee descuento del 5%: ' +descuento)
        
                        break;

                        default:
                            console.log('Actualmento no tenemos servicios para este destino ')
                
        }
    }else{
        console.log('Actualmente no tenemos servicios para su ciudad ')
    }
}

viajes_turisticos("50");