// script.js
function sortear() {
  const input = document.getElementById('nombres').value;
  const nombres = input.split(',').map(n => n.trim()).filter(n => n !== '');
  const resultadoDiv = document.getElementById('resultado');

  if (nombres.length < 2) {
    resultadoDiv.innerHTML = '<p>Necesitas al menos dos nombres para sortear.</p>';
    return;
  }

  let asignaciones = {};
  let disponibles = [...nombres];

  nombres.forEach(nombre => {
    let posibles = disponibles.filter(n => n !== nombre);
    if (posibles.length === 0) {
      resultadoDiv.innerHTML = '<p>No se pudo completar el sorteo sin repetir.</p>';
      return;
    }
    let elegido = posibles[Math.floor(Math.random() * posibles.length)];
    asignaciones[nombre] = elegido;
    disponibles = disponibles.filter(n => n !== elegido);
  });

  let html = '<h3>Resultados del sorteo:</h3><ul>';
  for (let [amigo, asignado] of Object.entries(asignaciones)) {
    html += `<li><strong>${amigo}</strong> regalará a <strong>${asignado}</strong></li>`;
  }
  html += '</ul>';
  resultadoDiv.innerHTML = html;
}
