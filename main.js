import {
     buscandoLosMarvel,
    } from "./marvel.js";



const root = document.getElementById("root");

async function mostrarMarveles() {
const marveles = await buscandoLosMarvel()
//console.log (marveles)

for (let i = 0; i < marveles.length; i++) {
    const marvel = marveles[i]; 
console.log ("El número de personaje marvel es",i, marvel);
//root.innerHTML += `<div class="tarjeta">${marvel.description}</div>`;

}
}

mostrarMarveles()