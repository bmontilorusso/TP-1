console.log("Estamos bien!");

let datoNumerico;

datoNumerico = prompt("Por favor, ingrese un número");

if (datoNumerico == 0) {
    console.log("El valor ingresado es IGUAL a cero.");
} else if (datoNumerico > 0) {
    console.log("El valor ingresado es POSITIVO.");
} else if (datoNumerico < 0) {
    console.log("El valor ingresado es NEGATIVO.");
} else {
    console.log("No se ingresó ningún dato.")
}



console.log(`El número ingresado es: ${datoNumerico}.`);




