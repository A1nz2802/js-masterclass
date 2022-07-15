//?---------------------------------------------------
//?FUNCIONES: DECLARADAS
//?---------------------------------------------------

function saludar() {
    console.log('Hola me llamo Mirko')
}

//saludar()

const almorzar = function() {
    console.log('Hola me llamo Mirko')
}

//almorzar()

//?---------------------------------------------------
//?FUNCIONES: ANÓNIMA Y FLECHA
//?---------------------------------------------------

const mayuscula = (nombre) => {
    const nombreEnMayuscula = nombre.toUpperCase()
    return console.log(nombreEnMayuscula)
}

//mayuscula('mirko')

const sumar = (a, b) => {
    sumatoria = a + b
    return console.log(sumatoria)
}

sumar(5,6)