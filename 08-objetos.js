//?---------------------------------------------------
//?Objetos: Colección e llave-valor
//?---------------------------------------------------

let persona = {
    nombre: ['Bob', 'Smith'],
    edad: 32,
    genero: 'masculino',
    intereses: ['musica', 'futbol'],
    saludo: function() {
        console.log('Hola soy $(this.nombre[0])')
    },
    contacto: {
        email: 'bobsmith@gmail.com',
        movil: '934796802'
    }
}

console.log(persona.contacto.email)
console.log(persona['nombre'][0])
console.log(persona.nombre[0])
console.log(persona.edad)
console.log(persona.saludo())
console.log(Object.keys(persona))
console.log(Object.values(persona))
console.log(persona.hasOwnProperty('nombre'))
