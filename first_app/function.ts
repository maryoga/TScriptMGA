const sumarFx = (valor1: number, valor2: number) : number => {
    return +valor1 + +valor2;
}

const dividir = function(a: number, b:number) : number  {
    return a / b;
}


function imprimir(): void{
    console.log(sumarFx(2,5));
}

imprimir();


//es posible extraer el tipo de la función para mejorar legibilidad o incluso para utilizarlo en otro lugar				
type MulFn = (a:number, b: number) => number
const multiplicar: MulFn  = (a,b) => a * b;

//Esto también puede ser logrado utilizando la sintaxis de objeto
type MulFnObj = {
    (a:number, b: number): number
}
const multiplicarObj: MulFnObj  = (a,b) => a * b;

//O también utilizando una interfaz
interface MulFnInterfaz {
    (a:number, b: number): number
}
const multiplicarI: MulFnInterfaz  = (a,b)=> a * b;


//parámetros opcionales	con signo de interrogación				
const multiplicarAB: (a:number, b?: number) => number  = (a,b) => a * (b ?? 1);

//parámetro por defecto - es tratado como opcional
const multiplicarAB_Opc: (a:number, b?: number) => number  = (a,b = 1) => a * b;
multiplicarAB_Opc(2) // = 2 
multiplicarAB_Opc(2, undefined) // 2


