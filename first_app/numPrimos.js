/**
 * Función principal obtiene una lista de números en un Array "numeros", utiliza un ciclo for para recorrer
 * el arreglo, dentro del ciclo se llama a una función "esPrimo". Esta función recibe como parámetro cada
 * elemento del arreglo (un número) que es evaluado para determinar si es un número primo o no
 *
*/
function principal() {
    let numeros = [11, 19, 20, 50, 61, 100];
    for (let i = 0; i < numeros.length; i++) {
        if (esPrimo(numeros[i])) {
            console.log(`El número '${numeros[i]}' es primo`);
        }
        else {
            console.log(`El número '${numeros[i]}' no es primo`);
        }
    }
}
/**
 * Indica si un numero es primo
 *
 * @param numero Número que queremos saber si es primo o no
 * @return True = es primo
 */
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    let contador = 0;
    //bucle que cuenta los numeros divisibles
    for (let i = Number(Math.trunc(Math.sqrt(11))); i > 1; i--) {
        if (numero % i == 0) {
            contador++;
        }
    }
    return contador < 1;
}
principal();
