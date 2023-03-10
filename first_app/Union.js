"use strict";
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Espera un string pero recibí '${padding}'.`);
}
console.log(padLeft('Hola Mundo', 20));
