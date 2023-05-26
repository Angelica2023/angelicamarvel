import {
     buscandoLosMarvel, buscarMarvelporNombre  } from "./marvel.js";



const root = document.getElementById("root");

async function mostrarMarveles() {
const marveles = await buscandoLosMarvel()
//console.log (marveles)

for (let i = 0; i < marveles.length; i++) {
    const marvel = marveles[i]; //i es la variable que cambia
   root.innerHTML += `<div class="tarjeta">Nombre:${marvel.name}
 <div class="tarjeta-content">
Numero:${marvel.numero}
<div class="tarjeta-content">
<span> Descripción: ${marvel.descripcion.slice(0, 20)}...</span>

 Imágen: <img scr=${marvel.imagen.path}.${marvel.imagen.extension} alt="${marvel.name}">
 

</div>
</div>`;
}
}

mostrarMarveles()

const buscador = document.getElementById("buscador"); //id de index.html

buscador.addEventListener("submit", async (e) => {
  e.preventDefault();

  root.innerHTML ="Espera un momento, buscando entre los Marvel"

const NombreDelMarvel = document.getElementById("input-buscar").value;

const marveles = await buscarMarvelporNombre(NombreDelMarvel);

root.innerHTML="";



for (let i = 0; i < marveles.length; i++) {
  const marvel = marveles[i]; 
 
  root.innerHTML += `<div class="tarjeta">Nombre:${marvel.name}
 <div class="tarjeta-content">

Numero:${marvel.numero}
<div class="tarjeta-content">
<span> Descripción: ${marvel.descripcion}...</span>
Imágen: <img scr=${marvel.imagen}/>


</div>
</div>
</div>`;
}
});
