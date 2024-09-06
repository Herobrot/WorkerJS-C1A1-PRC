function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10000000) + 1;
}
  
self.onmessage = function () {
    let x = generarNumeroAleatorio();
    let y = generarNumeroAleatorio();
      
    while (x !== y) {
      x = generarNumeroAleatorio();
      y = generarNumeroAleatorio();
    }
      
    self.postMessage({ x, y });
};
  