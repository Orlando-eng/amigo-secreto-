const listaAmigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  if (nombre) {
    listaAmigos.push(nombre);
    mostrarLista();
    input.value = "";
  }
}

function mostrarLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";
  listaAmigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    ul.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaAmigos.length < 2) {
    alert("Agrega al menos dos amigos para sortear.");
    return;
  }

  const asignaciones = {};
  const disponibles = [...listaAmigos];

  listaAmigos.forEach((nombre) => {
    const posibles = disponibles.filter((n) => n !== nombre);
    const elegido = posibles[Math.floor(Math.random() * posibles.length)];
    asignaciones[nombre] = elegido;
    disponibles.splice(disponibles.indexOf(elegido), 1);
  });

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  for (const [amigo, asignado] of Object.entries(asignaciones)) {
    const li = document.createElement("li");
    li.textContent = `${amigo} regalará a ${asignado}`;
    resultado.appendChild(li);
  }
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
