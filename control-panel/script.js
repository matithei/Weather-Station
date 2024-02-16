// Script para datos en tiempo real (mock)

// Simulación de datos de sensores
async function obtenerDatosSensores() {
   return axios
     .get("http://192.168.120.2/")
     .then(function (response) {
       // Actualizar el valor del sensor en el HTML
       return response.data.sensorValue;
     })
     .catch(function (error) {
       console.error("Error al obtener el valor del sensor:", error);
     });
}

// Función para actualizar la interfaz con los datos simulados
function actualizarInterfaz() {
   obtenerDatosSensores().then(lluvia => {
    const lluviaElemento = document.getElementById("lluvia");
    lluviaElemento.textContent = lluvia + " mm";
  });


  // Actualizar el valor de lluvia
  
}

// Actualizar la interfaz cada cierto intervalo de tiempo (en milisegundos)
setInterval(actualizarInterfaz, 3000); // Actualizar cada 3 segundos
