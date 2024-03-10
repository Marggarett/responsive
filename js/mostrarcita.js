document.addEventListener('DOMContentLoaded', function () {
    mostrarCitas();
});

function mostrarCitas() {
    var listaCitas = document.getElementById('ListaCitas');
    var citasGuardadas = JSON.parse(localStorage.getItem('dato_citas')) || [];

    if (citasGuardadas.length === 0) {
        listaCitas.innerHTML = '<p>No hay citas agendadas.</p>';
        return;
    }

    citasGuardadas.forEach(function (cita, index) {
        var citaElement = document.createElement('div');
        citaElement.classList.add('cita', 'mb-3', 'p-3', 'border', 'rounded');

        var fechaHoraElement = document.createElement('p');
        fechaHoraElement.textContent = 'Fecha: ' + cita.fecha + ', Hora: ' + cita.hora;
        citaElement.appendChild(fechaHoraElement);

        var psicoElement = document.createElement('p');
        psicoElement.textContent = 'Psicólogo: ' + cita.psico;
        citaElement.appendChild(psicoElement);

        var estudianteElement = document.createElement('p');
        estudianteElement.textContent = 'Estudiante: ' + cita.estudiante;
        citaElement.appendChild(estudianteElement);

        listaCitas.appendChild(citaElement);
    });
}
