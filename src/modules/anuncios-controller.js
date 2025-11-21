import { anunciosIniciales } from "./datos-iniciales.js";

// Lógica de arranque
if (!localStorage.getItem("anuncios")) {
  localStorage.setItem("anuncios", JSON.stringify(anunciosIniciales));
}

// Función para obtener anuncios
export function obtenerAnuncios() {
  return JSON.parse(localStorage.getItem("anuncios")) || [];
}

// Función para guardar un nuevo anuncio
export function guardarAnuncio(nuevo) {
  const anuncios = obtenerAnuncios();
  anuncios.push(nuevo);
  localStorage.setItem("anuncios", JSON.stringify(anuncios));
}
