//?---------------------------------------------------
//?Tipos de datos en Javascript
//?---------------------------------------------------

    //Primitivos
    let text = 'texto'
    let numero = 2

    let verdadero = true
    let falso = false

    const isDefined = true || false
    const some = 'text'

    console.log(typeof(text))
    console.log(typeof(numero))
    console.log(typeof(verdadero))
    console.log(typeof(falso))
    console.log(typeof(isDefined))
    console.log(some + 2)
    console.log(typeof(undefined))
    console.log(typeof(2n))
    console.log(typeof(Symbol()))

    //Objetos
    console.log(typeof {})
    console.log(typeof [])

    const numberList = [1, 2, 3, 4]

    const casa = {
        'habitacion': 'habitación 1',
        'baño': 'baño'
    }

    casa.baño = 'baño de losa'
    console.log(casa)

    const auto = {
        'ruedas': 'marca x',
        'carroceria': 'fabricada en y',
        'motor': 'num de serie z'
    }

    auto.motor = 'fabricada en la casa de Daniel'

    if (1 ==1) {
        console.log('Son iguales')
    } else {
        console.log('Son diferentes')
    }

    //?---------------------------------------------------
    //?Funciones
    //?---------------------------------------------------

    console.log(typeof function(){})
    