const ingresar = () => {
    // Obtener los valores de usuario y contraseña del formulario
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
  
    // Crear una instancia de XMLHttpRequest para realizar una solicitud AJAX
    const xhr = new XMLHttpRequest();
    // Abrir una conexión para obtener el archivo JSON de usuarios
    xhr.open('GET', 'https://storage.googleapis.com/datos_tablas/adminuser.json', true);
    // Definir qué hacer cuando la solicitud se complete
    xhr.onload = () => {
      // Verificar si la solicitud se completó exitosamente
      if (xhr.status === 200) {
        // Convertir la respuesta JSON en un objeto JavaScript
        const usuarios = JSON.parse(xhr.responseText);
  
        // Buscar el usuario ingresado en la lista de usuarios
        const usuarioValido = usuarios.find(u => u.usuario === usuario && u.contrasena === contrasena);
  
        // Verificar si el usuario es válido
        if (usuarioValido) {
          // Mostrar una alerta dependiendo del tipo de usuario
          if (usuarioValido.tipo === 'admin') {
            limpiar();
            window.location.href = '/html/administrador.html';
            // Aquí puedes redirigir al administrador a otra página específica
          } else if (usuarioValido.tipo === 'usuario') {
            limpiar();
            window.location.href = "/html/psico.html"
            
            // Aquí puedes redirigir al usuario regular a otra página específica
          }
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      } else {
        console.error('Error al cargar el archivo JSON');
      }
    };
    // Enviar la solicitud al servidor
    xhr.send();
};

const iconeye = document.querySelector(".icon-eye");
iconeye.addEventListener("click", function() {
    const icon = this.querySelector("i");
    const contrasenaInput = this.nextElementSibling;

    if (contrasenaInput.type === "password") {
        contrasenaInput.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        contrasenaInput.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
});


const limpiar = () => {
    document.getElementById('usuario').value = '';
    document.getElementById('contrasena').value = '';
    document.getElementById('recuerdame').checked = false;
};

document.getElementById("logout-button").addEventListener("click", function (event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado

  // Resto del código para cerrar sesión y redirigir
  window.location.href = "/html/index.html";
});
