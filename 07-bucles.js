//?---------------------------------------------------
//?Bucle While
//?---------------------------------------------------

let i = 0

while(i<=10) {
    //console.log(i)
    i++
}

//?---------------------------------------------------
//?Bucle do While
//?---------------------------------------------------

let j = 0

do {
    //console.log(j)
    j++
} while(j<=10)

//?---------------------------------------------------
//?Bucle for
//?---------------------------------------------------

for (let k=0; k<=10; k++) {
    //console.log(k)
}

//?---------------------------------------------------
//?Bucle forEach (Propio del los arreglos)
//?---------------------------------------------------

const arr = [1,2,3,4,5,6,7,8,9]

arr.forEach(function(element){
    //console.log(element)
})

arr.forEach((element) => {
    //console.log(element)
})

const arr2 = [null, undefined, 3, 'Hola']

arr.forEach(function(element, indice, arr){
    //console.log(indice, element, arr)
})

//?---------------------------------------------------
//?Bucle For of
//?---------------------------------------------------

let precios = [100,200,300,400]

for(let precio of precios) {
    //console.log('El precio es: '+precio)
    //console.log('El precio es:  ${precio}')
}

let cadena = 'Hola'

for(let caracter of cadena) {
    //console.log(caracter)
}

//?---------------------------------------------------
//?Bucle For in
//?---------------------------------------------------

let nombres = ['Holcen', 'Daniel', 'Mirko']

for(let nombre in nombres) {
    console.log(nombre)
}
