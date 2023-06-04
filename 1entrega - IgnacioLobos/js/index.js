//Crear una función que muestra el precio del producto, según su código

function mostrarPrecio(codigo) {
    switch (codigo) {
        case 1:
            alert("Las agendas personalizadas cuestan $ 3500")
            break;
        case 2:
            alert("Las agendas encuadernadas cuestan $3000")
            break;
        case 3:
            alert("Las agendas anilladas cuestan $3000")
            break;
        default:
            alert("Volver a ingresar tu seleccion por favor")
            break;
    }
}

function cantidadDeCuotas() {
    console.log("Todas nuestras agendas tienen:")
    for (let i = 1; i <= 3; i++) {
        console.log(i + ' cuotas sin interés.')
    }
    console.warn("A partir de la compra de 2 agendas el envio es gratis")
}

function consultarPoductos() {
    let respuesta = confirm("¿Deseas conocer nuestros productos de encuadernacion?")

    if (respuesta === true) {
        let codigo = parseInt(prompt("Ingresa el código numérico del producto a consultar:"))
        if (codigo > 0) {
            mostrarPrecio(codigo)
            cantidadDeCuotas()
        } else {
            console.warn("Ingresar un codigo correcto")
        }
    } else {
        console.warn("Te esperamos nuevamente")
    }
}
consultarPoductos()