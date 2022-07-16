//? Un objeto una colección de llave-valor

let persona = {
  nombre: ['Bob', 'Smith'],
  edad: 32,
  genero: 'masculino',
  intereses: ['música', 'futbol'],
  saludo: function() {
    console.log(`Hola soy ${this.nombre[0]}`)
  },
  contacto: {
    email: 'bobsmith@gmail.com',
    movil: '958395492'
  }
}
