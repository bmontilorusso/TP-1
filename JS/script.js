// Globales:

let inputRespuesta = document.getElementById("inputRespuesta");

// Tarea 1:

let numeroTarea1;

function ejecutarTarea1(){
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup2").style.display = "none";
    document.getElementById("popup3").style.display = "none";
    document.getElementById("inputTarea1").value = "";
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

// Tarea 2:

let lado1;
let lado2;
let lado3;


function ejecutarTarea2(){
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup2").style.display = "flex";
    document.getElementById("popup3").style.display = "none";
    document.getElementById("lado1").value = "";
    document.getElementById("lado2").value = "";
    document.getElementById("lado3").value = "";
    document.getElementById("inputRespuesta").value = "";
}

function evaluarNumeroTarea2() {
    // Ir a buscar los números y guardarlos en las variables:
    lado1 = parseFloat(document.getElementById("lado1").value);
    lado2 = parseFloat(document.getElementById("lado2").value);
    lado3 = parseFloat(document.getElementById("lado3").value);
    console.log(`Éxito al guardar los 3 valores: ${lado1}, ${lado2}, ${lado3}.`);
    let sumaDeLados = lado1 + lado2 + lado3;
    //Evaluación:
    if (sumaDeLados >= 3) {
        if (lado1 == lado2 && lado2 == lado3) {
            console.log("Todos los lados son iguales, por ende, es un EQUILÁTERO.");
            inputRespuesta.value = "Todos los lados son iguales, por ende, es un EQUILÁTERO.";
        } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
            console.log("Todos los lados son distintos, por ende, es un ISÓSCELES.");
            inputRespuesta.value = "Todos los lados son distintos, por ende, es un ISÓSCELES.";
        } else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
            console.log("Dos lados son iguales, por ende, es un ESCALENO.");
            inputRespuesta.value = "Dos lados son iguales, por ende, es un ESCALENO.";
        }
    } else {
        console.log("Algo no anda bien. Alguno de los datos no es válido.")
        inputRespuesta.value = "Algo no anda bien. Alguno de los datos no es válido.";
    }
    document.getElementById("respuesta").style.display = "flex";

}

// Tarea 3:

let num1;
let num2;
let num3;
let evaluacionTarea3;


function ejecutarTarea3() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup2").style.display = "none";
    document.getElementById("popup3").style.display = "flex";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    document.getElementById("inputRespuesta").value = "";
}

function evaluarNumeroTarea3() {
    // Guardar los números en las variables:
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    num3 = parseFloat(document.getElementById("num3").value);
    console.log(`Éxito al guardar los 3 números: ${num1}, ${num2}, ${num3}.`);
    // Evaluar los números:
    evaluacionMax = Math.max(num1, num2, num3);
   if (num1 == num2 && num2 == num3) {
        inputRespuesta.value = `Hay empate. Los 3 números son iguales! (${evaluacionMax}).`;
    } else if (num1 == num2 && num2 > num3) {
        inputRespuesta.value = `Hay empate. El #1 y el #2 son iguales (${evaluacionMax}).`;
    } else if (num2 == num3 && num3 > num1) {
        inputRespuesta.value = `Hay empate. El #2 y el #3 son iguales (${evaluacionMax}).`;
    } else if (num1 == num3 && num3 > num2) {
        inputRespuesta.value = `Hay empate. El #1 y el #3 son iguales (${evaluacionMax}).`;
    } else if (num1 != num2 && num2 != num3 && num1 != num3) {
        inputRespuesta.value = `El número más grande es: ${evaluacionMax}`;
    } else if (num){
        inputRespuesta.value = `Algo no anda bien. Debe completar los 3 campos!`;
    } 
    document.getElementById("respuesta").style.display = "flex";
}

// Cerrar ventanas:

function cerrarPopUp(){
    document.getElementById("popup").style.display = "none";
    cerrarRespuesta();

}

function cerrarPopUp2(){
    document.getElementById("popup2").style.display = "none";
    cerrarRespuesta();
}

function cerrarPopUp3(){
    document.getElementById("popup3").style.display = "none";
    cerrarRespuesta();
}


function cerrarRespuesta(){
    document.getElementById("respuesta").style.display = "none";
    inputRespuesta.value = "";
}
