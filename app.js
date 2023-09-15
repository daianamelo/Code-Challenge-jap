document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('miFormulario');
    const nombreInput = document.getElementById('nombre');
    const nacimientoInput = document.getElementById('fdn');
    const apellidoInput = document.getElementById('apellido');
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Accede al valor de los campos directamente
      const nombre = nombreInput.value;
      const apellido = apellidoInput.value;
      const fechaNacimiento = nacimientoInput.value;
  
      console.log('Nombre:', nombre);
      console.log('Apellido:', apellido);
      console.log("Fecha de Nacimiento:", fechaNacimiento);
  
      const dataFormulario = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
      };
  
      console.log(dataFormulario);
  
      // Realiza la solicitud POST a la API
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataFormulario) // Debes convertir el objeto a JSON usando JSON.stringify
      })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta de la API:', data);
        // Realiza acciones adicionales con la respuesta de la API si es necesario
      })
      .catch(error => {
        console.error('Error al enviar los datos:', error);
      });
    });
  });
  