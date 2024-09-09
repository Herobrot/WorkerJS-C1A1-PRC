let contador = 0;

function incrementarContador() {
  contador++;

  postMessage(contador);
}

let intervalo;

self.onmessage = function (event) {
  if (event.data === 'iniciar') {
    intervalo = setInterval(incrementarContador, 1000);
  } else if (event.data === 'detener') {
    clearInterval(intervalo);
    intervalo = null;
  }
};
