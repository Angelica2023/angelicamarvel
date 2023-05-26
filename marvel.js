export async function buscandoLosMarvel() {
 try {
    
    const response = await fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=89d89bbcc96a5518b7045154acab2cd0&hash=bcd2343e53b65e1753264d81de0fa5f3&limit=50");
   
    
    const data = await response.json();
    
    const resultadosObtenidos = data.data.results;
  
    const resultadosFormateados = [];
    resultadosObtenidos.forEach((marvel) => {
      let personajeFormateado = {
        imagen: marvel.thumbnail,
        name: marvel.name,
        numero: marvel.id,
        descripcion: marvel.description,

      };
      resultadosFormateados.push(personajeFormateado);
    });
     console.log(resultadosFormateados);
    return resultadosFormateados;
 } catch (error) {
     console.error('Error al obtener los personajes:', error);
    return [];
   }
}

 buscandoLosMarvel();

//let NombreDelMarvel = "HULK";
export async function  buscarMarvelporNombre (NombreDelMarvel){
try{
    const data = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=89d89bbcc96a5518b7045154acab2cd0&hash=bcd2343e53b65e1753264d81de0fa5f3&name=${NombreDelMarvel}`);

const dataJson = await data.json()
const resultadosObtenidos = dataJson.data.results
const resultadosFormateados = [];

resultadosObtenidos.forEach((marvel) => {
 let personajeFormateado = {
 imagen: marvel.thumbnail,
 name: marvel.name,
 numero: marvel.id

 };

 resultadosFormateados.push(personajeFormateado);
})

return resultadosFormateados;
} catch (error) {
  console.error('Error en la busqueda del personaje:', error);
 return [];
}
}
buscarMarvelporNombre();
//const personajeBuscado = await BuscarMarvelporNombre (NombreDelMarvel);
//console.log (personajeBuscado);
