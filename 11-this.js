//? El objeto this

//? This cambia dependiendo del contexto en el cual sea ejecutado

const obj = {
  message: 'Hello World',
  algo: 'asdas',
  getMessage() {
    return console.log(this.message)
  },
}

setTimeout(() => obj.getMessage(), 5000)
