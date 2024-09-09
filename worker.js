let workerBucle;
let workerContador;

if (typeof Worker !== "undefined") {  
  function crearWorker(tipo) {    
    if (tipo === 'bucle' && typeof workerBucle === "undefined") {
      workerBucle = new Worker('bucle.js');
      
      workerBucle.onmessage = function (event) {
        const { x, y } = event.data;
        document.getElementById('parrafo').textContent = `x: ${x}, y: ${y}`;
      };
    } else if (tipo === 'contador' && typeof workerContador === "undefined") {
      workerContador = new Worker('contador.js');
      
      workerContador.onmessage = function (event) {        
        document.getElementById('contador').textContent = event.data;
      };
    }
  }
  
  function iniciarContador() {
    crearWorker('contador');
  workerContador.postMessage('iniciar'); 
  }
  
  function detenerContador() {
    if (workerContador) {
    workerContador.postMessage('detener'); 
    workerContador.terminate(); 
    workerContador = undefined; 
    }
  }
  
  function iniciarBusqueda() {
    crearWorker('bucle');
  workerBucle.postMessage('start'); 
  }
  
  document.getElementById('btn-encontrar').addEventListener('click', iniciarBusqueda);
  
  document.getElementById('btn-iniciar').addEventListener('click', iniciarContador);
  document.getElementById('btn-detener').addEventListener('click', detenerContador);
} else {
  console.error("Web Workers no son soportados por este navegador.");
}
