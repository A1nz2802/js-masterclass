//* Funciones declaradas

function saludar() {
  // console.log('Hola me llamo Brawer')
}

// saludar()

const almorzar = function() {
  // console.log('Hola me llamo Brawer')
}

// almorzar()

//* Funciones flechas
const mayuscula = (nombre) => {
  nombre = nombre.toUpperCase()
  return console.log(nombre) 
}

mayuscula('brawer')