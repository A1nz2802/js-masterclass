//? Tipos de datos en JavaScript

//* Primitivos
let text = 'texto'
let numero = 2

let verdadero = true
let false2 = false

const isDefined = true || null
const some = 'text'

console.log()
// console.log(typeof(text))
// console.log(typeof(numero))
// console.log(typeof(verdadero))
// console.log(typeof(false2))
// console.log(typeof(isDefined))

// console.log(typeof 2n)
// console.log(typeof Symbol())
let vacio = null

//* Objetos
console.log(typeof [])
console.log(typeof {})

const auto = {
  ruedas: 'marca x',
  carroceria: 'fabricada en y',
  motor: 'num de serie z'
}

const auto2 = {
  ruedas: 'marca x',
  carroceria: 'fabricada en y',
  motor: 'num de serie z'
}

auto.motor = 'facbricada en la casa de Daniel'

// console.log(auto)

if (auto === auto2) {
  console.log('Son iguales')
} else {
  console.log('Son diferentes')
}

//* Funciones
console.log(typeof function(){})