// Array de nombres
const nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Carla", "José", "Lucía", "Miguel"];
let indice = 0;

const btn = document.getElementById("btnMostrar");
const contenedor = document.getElementById("contenedorNombres");

btn.addEventListener("click", () => {
  if (indice < nombres.length) {
    // Crear un div de columna Bootstrap (col-4 = 3 columnas)
    const col = document.createElement("div");
    col.className = "col-4 mb-3 text-center";
    col.textContent = nombres[indice];
    contenedor.appendChild(col);

    indice++;
  } else {
    alert("Ya se mostraron todos los nombres");
  }
});
