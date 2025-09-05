// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista global de amigos
let amigos = [];

// Función para agregar nombres
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombresIngresados = input.value.trim();

  if (nombresIngresados === "") return;

  // Separar por comas y limpiar espacios
  const nuevosNombres = nombresIngresados
    .split(",")
    .map(nombre => nombre.trim())
    .filter(nombre => nombre !== "");

  // Agregar nombres únicos
  nuevosNombres.forEach(nombre => {
    if (!amigos.includes(nombre)) {
      amigos.push(nombre);
    }
  });

  mostrarLista();
  input.value = "";
}

// Mostrar la lista de nombres
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nombre, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${nombre}`;
    lista.appendChild(item);
  });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length === 0) {
    resultado.textContent = "Por favor, añade al menos un nombre.";
    return;
  }

  const indiceGanador = Math.floor(Math.random() * amigos.length);
  const nombreGanador = amigos[indiceGanador];

  // Mostrar resultado con animación
  resultado.textContent = `🎉 El Amigo Secreto es: ${nombreGanador}`;
  resultado.classList.add("resultado-animado");

  // Mostrar confeti
  mostrarConfeti();

  // Mostrar botón de WhatsApp
  mostrarBotonWhatsApp(nombreGanador);
}

// Animación de confeti
function mostrarConfeti() {
  const confeti = document.createElement("div");
  confeti.className = "confeti";
  document.body.appendChild(confeti);

  setTimeout(() => {
    confeti.remove();
  }, 3000);
}

// Botón para compartir por WhatsApp
function mostrarBotonWhatsApp(nombre) {
  const resultado = document.getElementById("resultado");
  const mensaje = encodeURIComponent(`🎁 El Amigo Secreto es: ${nombre}`);
  const enlace = `https://wa.me/?text=${mensaje}`;

  const boton = document.createElement("a");
  boton.href = enlace;
  boton.target = "_blank";
  boton.textContent = "Compartir por WhatsApp";
  boton.className = "whatsapp-button";

  resultado.appendChild(boton);
}

// Reiniciar lista
function reiniciarLista() {
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}

// Modo oscuro
function toggleModoOscuro() {
  document.body.classList.toggle("modo-oscuro");
}
function reiniciarLista() {
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("amigo").value = "";
}
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nombre, index) => {
    const item = document.createElement("li");
    item.classList.add("nombre-animado");
    item.textContent = `${index + 1}. ${nombre}`;
    lista.appendChild(item);
  });
}
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nombre, index) => {
    const item = document.createElement("li");
    item.classList.add("nombre-animado");
    item.textContent = `${index + 1}. ${nombre}`;
    lista.appendChild(item);
  });
}
function generarColorDesdeTexto(texto) {
  let hash = 0;
  for (let i = 0; i < texto.length; i++) {
    hash = texto.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = "#" + ((hash >> 24) & 0xFF).toString(16).padStart(2, '0') +
                      ((hash >> 16) & 0xFF).toString(16).padStart(2, '0') +
                      ((hash >> 8) & 0xFF).toString(16).padStart(2, '0');
  return color;
}
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nombre, index) => {
    const item = document.createElement("li");
    item.classList.add("nombre-animado");
    item.textContent = `${index + 1}. ${nombre}`;
    item.style.color = generarColorDesdeTexto(nombre);
    lista.appendChild(item);
  });
}
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const alerta = document.getElementById("alertaDuplicado");
  const nombresIngresados = input.value.trim();

  if (nombresIngresados === "") return;

  const nuevosNombres = nombresIngresados
    .split(",")
    .map(nombre => nombre.trim())
    .filter(nombre => nombre !== "");

  let duplicados = [];

  nuevosNombres.forEach(nombre => {
    if (amigos.includes(nombre)) {
      duplicados.push(nombre);
    } else {
      amigos.push(nombre);
    }
  });

  if (duplicados.length > 0) {
    alerta.textContent = `⚠️ El nombre "${duplicados.join(', ')}" ya está en la lista.`;
    alerta.style.display = "block";
    setTimeout(() => {
      alerta.style.display = "none";
    }, 3000);
  } else {
    alerta.style.display = "none";
  }

  mostrarLista();
  input.value = "";
}
