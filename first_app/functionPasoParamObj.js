/**
 *
 * @param position Pasamos un objeto como parámetro a la función printPosition compuesto por las propiedades; lat y long
 */
function printPosition(position) {
    console.log(`Latitude & Longitude are: LAT ${position.lat} LONG: ${position.long}`);
}
printPosition({ lat: 3, long: 5 });
/**
 *
 * @param name Parámetro con valor por default, en caso de no pasarle ningún valor toma por default el valor "User"
 */
function greet(name = 'User') {
    console.log(`Hello, ${name.toUpperCase()}!!`);
}
greet('Hidrolisis');
greet();
