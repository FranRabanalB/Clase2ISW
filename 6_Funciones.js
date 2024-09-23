// 1. Crea una función que reciba un string y retorne el string en mayúsculas.
function Mayusculas(str) {
    return str.toUpperCase();
}
console.log(Mayusculas("hola"));      

// 2. Crea una función que reciba un string y retorne el string en minúsculas.
function Minusculas(str) {
    return str.toLowerCase();
}

console.log(Minusculas("HOLA"));   

// 3. Crear una función que reciba como parámetro 2 números y los reste.
function restar(numero1, numero2) {
    return numero1 - numero2;
}
console.log(restar(7, 5));     

// 4.Crear una función que reciba como parámetro 2 números y los divida.
function dividir(numero1, numero2) {
    return numero1 / numero2;
}
console.log(dividir(10, 2));   

// 5. Crear una función que reciba como parámetro 2 números y los multiplique.
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
console.log(multiplicar(10, 20));  


// 6. Crear una función que reciba un string y devuelva la longitud del string.
function longitud(str) {
    return str.length;
}
console.log(longitud("hola"));   
