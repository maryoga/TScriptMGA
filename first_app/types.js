"use strict";
//definiendo un Array dentro del Objeto Persona
var role;
(function (role) {
    role[role["estudiante"] = 0] = "estudiante";
    role[role["profesor"] = 1] = "profesor";
})(role || (role = {}));
let persona = {
    nombre: 'Rodrigo',
    edad: 34,
    direccion: {
        calle: "Los presidentes",
        comuna: "santiago"
    },
    cursos: ['Flutter', 'Patrones de diseño', 'SQL'],
    role: role.estudiante
};
console.log(persona);
let hobbies = ['Futbol', 'Leer', 'Escuchar música'];
//ordenando el array por orden alfabetico
hobbies.sort();
for (const hobbie of hobbies) {
    console.log(hobbie.toLocaleUpperCase());
}
