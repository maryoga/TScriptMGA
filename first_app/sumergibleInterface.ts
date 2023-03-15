interface sumergibleInterface {
    tiempoMaxBajoElAgua: number;
    profundidadMaxima: number;
  
    repelerAgua(): void;
  }

  class relojSumergible implements sumergibleInterface {
    tiempoMaxBajoElAgua = 1;
    profundidadMaxima = 10;
    repelerAgua() {
      console.log('El agua me resbala');
    }
  }