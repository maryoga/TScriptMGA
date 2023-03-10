"use strict";
const sumarFx = (valor1, valor2) => {
    return +valor1 + +valor2;
};
const dividir = function (a, b) {
    return a / b;
};
function imprimir() {
    console.log(sumarFx(2, 5));
}
imprimir();
const multiplicar = (a, b) => a * b;
const multiplicarObj = (a, b) => a * b;
const multiplicarI = (a, b) => a * b;
//parámetros opcionales	con signo de interrogación				
const multiplicarAB = (a, b) => a * (b !== null && b !== void 0 ? b : 1);
//parámetro por defecto - es tratado como opcional
const multiplicarAB_Opc = (a, b = 1) => a * b;
multiplicarAB_Opc(2); // = 2 
multiplicarAB_Opc(2, undefined); // 2
