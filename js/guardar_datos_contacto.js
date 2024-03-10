document.getElementById("formularioContacto").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Llamar a la función para guardar los datos en localStorage
    guardarDatosEnLocalStorage(nombre, email, mensaje);
});


const guardarDatosEnLocalStorage = (nombre, email, mensaje) => {
    // Comprobar si hay datos antiguos en localStorage
    var datosAntiguos = localStorage.getItem("datos_contacto") || "[]";

    // Convertir los datos a un array JavaScript
    var datos = JSON.parse(datosAntiguos);

    // Crear un nuevo objeto con los datos del formulario
    var nuevoDato = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    // Agregar el nuevo dato al array
    datos.push(nuevoDato);

    // Convertir los datos a formato JSON y guardarlos en localStorage
    localStorage.setItem("datos_contacto", JSON.stringify(datos));

    // Limpiar los campos de entrada
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";

    // Alerta para confirmar que se han guardado los datos
    alert("Mensaje enviado correctamente.");
}
