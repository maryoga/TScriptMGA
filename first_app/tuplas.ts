type vehiculoType = [string, number, string] 

let automovil: vehiculoType = ['nazda', 2020, 'rojo'];
let moticicleta: vehiculoType = ['yamaha', 2023, 'negro'];

console.log(automovil);
console.log(moticicleta);

//de este modo nos ahorramos tener que ir definiendo el tipo de datos para un arreglo
let vehiculo = {
    marca: '',
    year: '',
    color: ''
};

