let num1;
let num2;
let num3;

let respuestaMásGrande;
let numerosIguales;

num1 = prompt("Por favor, ungrese el primer número!");
num2 = prompt("Por favor, ungrese el segundo número!");
num3 = prompt("Por favor, ungrese el tercer número!");


if (num1 > num2 && num1 > num3) {
    respuestaMásGrande = `El primer número (${num1}) es el más grande.`;
} else if (num2 > num1 && num2 > num3) {
    respuestaMásGrande = `El segundo número (${num2}) es el más grande.`;
} else if (num3 > num1 && num3 > num2) {
    respuestaMásGrande = `El tercer número (${num3}) es el más grande.`;
}



console.log(respuestaMásGrande);