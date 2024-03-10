document.getElementById("registroForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    var correo = document.getElementById("correo").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var documento = document.getElementById("documento").value;

    // Validar los campos
    if (usuario.trim() === "" || contraseña === "" || correo === "" || fechaNacimiento === "" || documento === "") {
        alert("Por favor complete todos los campos");
        return;
    }

    if (!/^[a-zA-Z]+$/.test(usuario)) {
        alert("El usuario solo puede contener letras");
        return;
    }

    if (contraseña.length < 8 || !/\d/.test(contraseña) || !/[!@#$%^&*(),.?":{}|<>]/.test(contraseña)) {
        alert("La contraseña debe tener al menos 8 caracteres, incluir al menos un número y un carácter especial");
        return;
    }

    if (!correo.includes("@")) {
        alert("Por favor ingrese un correo válido: example@gmail.com");
        return;
    }

    if (!/^\d{10}$/.test(documento)) {
        alert("El documento de identificación debe contener exactamente 10 números");
        return;
    }

    // Llamar a la función para guardar los datos en localStorage
    guardarDatosEnLocalStorage(usuario, contraseña, correo, fechaNacimiento, documento);
});

const guardarDatosEnLocalStorage = (usuario, contraseña, correo, fechaNacimiento, documento) => {
    // Comprobar si hay datos antiguos en localStorage
    var datosAntiguos = localStorage.getItem("datos_registro");
    // Crear un vector para almacenar los datos
    var datos = [];
    // Si hay datos antiguos, recuperarlos y agregarlos al vector
    if (datosAntiguos) {
        datos = JSON.parse(datosAntiguos);
        // Verificar si los datos recuperados son un array
        if (!Array.isArray(datos)) {
            // Si no es un array, crear uno nuevo con los datos antiguos
            datos = [datos];
        }
    }
    // Crear un nuevo objeto con los datos del formulario
    var nuevoDato = {
        usuario: usuario,
        contraseña: contraseña,
        correo: correo,
        fechaNacimiento: fechaNacimiento,
        documento: documento
    };

    // Agregar el nuevo dato al vector
    datos.push(nuevoDato);

    // Convertir los datos a formato JSON y guardarlos en localStorage
    localStorage.setItem("datos_registro", JSON.stringify(datos));

    // Alerta para confirmar que se han guardado los datos
    alert("Datos registrados correctamente.");

    // Limpiar los campos de entrada
    document.getElementById("usuario").value = "";
    document.getElementById("contraseña").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("fechaNacimiento").value = "";
    document.getElementById("documento").value = "";

}

