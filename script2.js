let ladoUno;
let ladoDos;
let ladoTres;
let sumaDeLados;

ladoUno = prompt("Por favor, ingrese el largo del LADO 1.");
ladoDos = prompt("Por favor, ingrese el largo del LADO 2.");
ladoTres = prompt("Por favor, ingrese el largo del LADO 3.");

sumaDeLados = ladoUno + ladoDos + ladoTres;

if (sumaDeLados >= 3) {
    if (ladoUno == ladoDos && ladoDos == ladoTres) {
        console.log("Todos los lados son iguales, por ende, es un EQUILÁTERO.");
    } else if (ladoUno != ladoDos && ladoDos != ladoTres && ladoUno != ladoTres){
        console.log("Todos los lados son distintos, por ende, es un ISÓSCELES.");
    } else if (ladoUno == ladoDos || ladoDos == ladoTres || ladoTres == ladoUno) {
        console.log("Dos lados son iguales, por ende, es un ESCALENO.");
    }
} else {
    console.log("Algo no anda bien. Alguno de los datos no es válido.")
}

