//* Bucle While
let i = 0

while( i <= 10 ) {
  // console.log(i)
  i++
}

//* Bucle Do While
let j = 0

do {
  // console.log(j)
  j++
} while ( j <= 10 )

//* Bucle For
for (let k = 0; k <= 10; k++) {
  // console.log(k)
}

//* Bucle For Each (propio de los arreglos)
const arr = [null, undefined, 3, 'Hola']

arr.forEach(function(element, index, arr){
  // console.log(arr)
})



//* Bucle For of
let precios = [100, 250, 300, 400]

for (let precio of precios) {
  // console.log(`El precio es: ${precio}`)
}

let cadena = 'Hola'
for (let caracter of cadena) {
  // console.log(caracter)
}

//* Bucle For in
let nombres = ['Holcen', 'Daniel', 'Mirko', 'Renzo']

for (let nombre in nombres) {
  console.log(nombre)
}
