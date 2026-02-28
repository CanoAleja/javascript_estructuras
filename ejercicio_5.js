const prompt = require('prompt-sync')();

let contraseñaCorrecta = "1234";
let intentos = 0;
let acceso = false;

while (intentos < 3) {

  let contraseña = prompt("Ingresa la contraseña: ");

  if (contraseña === contraseñaCorrecta) {
    console.log("Acceso concedido");
    acceso = true;
    break;
  } else {
    console.log("Contraseña incorrecta");
  }

  intentos++;
}