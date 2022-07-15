//?---------------------------------------------------
//?CALLBACKS: Es una función que se pasa a otra
//?---------------------------------------------------

const operation = (num1, num2, callback) => {
    return callback(num1, num2)
}

const resultado = operation(1, 2, (a, b) => a + b)

console.log(resultado)

setTimeout(() => {
    console.log('Hola')
}, 5000)