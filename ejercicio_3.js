const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingresa un número para ver su tabla: "));

for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}