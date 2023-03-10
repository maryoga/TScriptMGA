//definiendo un Array dentro del Objeto Persona
enum role{
    estudiante,
    profesor
}
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

let hobbies: string[] = ['Futbol', 'Leer', 'Escuchar música'];
//ordenando el array por orden alfabetico
hobbies.sort();

for(const hobbie of hobbies){
    console.log(hobbie.toLocaleUpperCase());
}