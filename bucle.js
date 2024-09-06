if (typeof Worker !== "undefined") {
    if (typeof worker === "undefined") {
      const worker = new Worker('worker.js');
    
      worker.onmessage = function (event) {
        const { x, y } = event.data;
        document.getElementById('parrafo').textContent = `x: ${x}, y: ${y}`;
      };
    
      function iniciarBusqueda() {
        worker.postMessage('start');
      }
    
      document.getElementById('btn-encontrar').addEventListener('click', iniciarBusqueda);
    } else {
      console.log("El Worker ya está en uso o ha sido creado previamente.");
    }
  } else {
    console.error("Web Workers no son soportados por este navegador.");
  }
  