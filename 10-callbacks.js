//? Un callback es una función que se pasa
//? como parámetro a otra función

const operation = (num1, num2, callback) => {
  return callback(num1, num2)
}

const resultado = operation(1, 3, (a, b) =>  a + b )

setTimeout(() => {
  console.log(x)
}, 5000)