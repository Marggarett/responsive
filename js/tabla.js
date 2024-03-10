// Obtener los datos desde la nube usando fetch
fetch('https://storage.googleapis.com/datos_tablas/adminuser.json')
    .then(response => response.json())
    .then(data => {
        // Llamar a la función para mostrar la tabla con los datos obtenidos
        mostrarTabla(data);
    })
    .catch(error => {
        console.error('Error al obtener los datos desde la nube:', error);
    });

// Función para mostrar la tabla con los datos obtenidos
function mostrarTabla(datos) {
    var tabla = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];

    for (var i = 0; i < datos.length; i++) {
        var fila = tabla.insertRow(i);
        var celdaUsuario = fila.insertCell(0);
        var celdaContraseña = fila.insertCell(1);
        var celdaTipo = fila.insertCell(2);

        celdaUsuario.innerHTML = datos[i].usuario;
        celdaContraseña.innerHTML = datos[i].contrasena;
        celdaTipo.innerHTML = datos[i].tipo;
        // Agregar clases según el tipo de usuario
        fila.classList.add(datos[i].tipo.toLowerCase());
    }
}
