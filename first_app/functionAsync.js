"use strict";
/*

"use strict";
//Ejemplo de un bucle basado en promises async
// representa el dato devuelto por la promesa, en este caso un contador
var i = 0;
 
// cada vez que se ejecuta esta funcion se añade 1
// esto podría ser un $http
function accesoAlServidor(milliseconds: number) {
    return  new Promise<number>((resolve,reject) => {
                if (i % 5 == 0) reject({error:"error",i:i++});
                setTimeout(()=> {return resolve(i++); }, milliseconds)}
            );
}
// función que hace el bucle
// las funciones con await deben de tener el prefijo async
async function main()
{
    while (i <= 10)
        {
            // si la promise falla, se ejecuta el catch
            // tanto si falla como si va bien obtenemos el objeto del resolve o del reject
            try {
                var r = await accesoAlServidor(100);
                if (r.resu == 1)
                    var r = await accesoAlServidor(100);
                console.log(r);
            } catch (error) {
                console.log(error);
            }
        }
}
// main
main();
*/ 
