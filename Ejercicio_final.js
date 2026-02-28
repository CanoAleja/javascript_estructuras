const prompt = require('prompt-sync')();

// -------- FUNCION 1 --------
function sumar() {
    let a = parseInt(prompt("Ingresa el primer número: "));
    let b = parseInt(prompt("Ingresa el segundo número: "));
    console.log("Resultado:", a + b);
}

// -------- FUNCION 2 --------
function tablaMultiplicar() {
    let numero = parseInt(prompt("Ingresa un número: "));

    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

// -------- FUNCION 3 --------
function esPar() {
    let numero = parseInt(prompt("Ingresa un número: "));

    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

// -------- FUNCION 4 --------
function contar() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

// -------- FUNCION PRINCIPAL --------
function main() {

    console.log("1. Sumar");
    console.log("2. Tabla de multiplicar");
    console.log("3. Número par o impar");
    console.log("4. Contar del 1 al 5");

    let opcion = prompt("Elige una opción: ");

    switch (opcion) {
        case "1":
            sumar();
            break;

        case "2":
            tablaMultiplicar();
            break;

        case "3":
            esPar();
            break;

        case "4":
            contar();
            break;

        default:
            console.log("Opción no válida");
    }
}

// Llamamos la función principal
main();