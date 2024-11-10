// Globales:

let inputRespuesta = document.getElementById("inputRespuesta");

// Tarea 1:

let numeroTarea1;

function ejecutarTarea1(){
    document.getElementById("popup").style.display = "flex";
    document.getElementById("inputTarea1").value = "";
    numeroTarea1 = null;

}

function evaluarNumeroTarea1() {
    // Ir a buscar el número y guardarlo en la variable:
    numeroTarea1 = parseFloat(document.getElementById("inputTarea1").value);
    console.log(`Éxito al guardar el número (${numeroTarea1}).`);
    // Evaluación:
    if (numeroTarea1 == 0) {
        console.log("El número ingresado es IGUAL a CERO.");
        inputRespuesta.value = "El número ingresado es IGUAL a CERO.";
    } else if (numeroTarea1 > 0) {
        console.log(`El número ingresado (${numeroTarea1}) es POSITIVO.`);
        inputRespuesta.value = `El número ingresado (${numeroTarea1}) es POSITIVO.`;
    } else if (numeroTarea1 < 0) {
        console.log(`El número ingresado (${numeroTarea1}) es NEGATIVO.`);
        inputRespuesta.value = `El número ingresado (${numeroTarea1}) es NEGATIVO.`;
    } else if (numeroTarea1 = " ") {
        console.log("Debe ingresar un número!");
        inputRespuesta.value = "Debe ingresar un número!";
    } else {
        console.log("El valor ingresado no es válido.");
        inputRespuesta.value = "El valor ingresado no es válido.";
    }
    document.getElementById("respuesta").style.display = "flex";
}



// Cerrar ventanas:

function cerrarPopUp(){
    document.getElementById("popup").style.display = "none";
    document.getElementById("respuesta").style.display = "none";
    inputRespuesta.value = "";

}

function cerrarRespuesta(){
    document.getElementById("respuesta").style.display = "none";
    inputRespuesta.value = "";
}