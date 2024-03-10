document.getElementById('citaForm').addEventListener('submit', function (event) {
    // Prevenir el envío del formulario si la fecha no es válida
    if (!validarFecha()) {
        event.preventDefault();
        return;
    }

    event.preventDefault();

    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;
    var psico = document.getElementById('psico').value;
    var estudiante = document.getElementById('estudiante').value;

    save(fecha, hora, psico, estudiante);
});
        
    const save = (fecha, hora, psico, estudiante) => {
        // Validar si se han ingresado todos los campos
        if (fecha && hora && psico && estudiante) {
            // Obtener citas previas del localStorage
            var dato_citas = JSON.parse(localStorage.getItem('dato_citas')) || [];
            
            // Agregar nueva cita al arreglo
            dato_citas.push({
                fecha: fecha,
                hora: hora,
                psico: psico,
                estudiante: estudiante
            });
            
            // Guardar citas en el localStorage
            localStorage.setItem('dato_citas', JSON.stringify(dato_citas));
            
            alert('Cita agendada correctamente.');
            
            // Limpiar formulario
            document.getElementById('citaForm').reset();
        } else {
            alert('Por favor, complete todos los campos del formulario.');
        }
    }
    function validarFecha() {
        var fechaInput = document.getElementById('fecha').value;
        var fechaSeleccionada = new Date(fechaInput);
        var fechaActual = new Date();
    
        if (fechaSeleccionada < fechaActual) {
            alert("No puedes agendar una cita antes de la fecha actual.");
            return false;
        }   
        return true;
    }
