
// EJEMPLOS DE NOTION
const numeros = [1, 2, 3, 4, 5]
const strings = ["hola", "ejercicios", "arrays"];


//1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
function SumaA(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]; 
    }
    return suma;
}
console.log(SumaA(numeros));   


//2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
function promedioA(numeros) {
    const suma = SumaA(numeros); 
    return suma / numeros.length;
}
console.log(promedioA(numeros)); 

//3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
function convertirAMayus(arrayStrings) {
    let mayusculas = [];
    for (let i = 0; i < arrayStrings.length; i++) {
        mayusculas.push(arrayStrings[i].toUpperCase()); 
    }
    return mayusculas;
}
console.log(convertirAMayus(strings));

//4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
function pares(numeros) {
    let resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            resultado.push(numeros[i]);
        }
    }
    return resultado;
}
console.log(pares(numeros)); 
