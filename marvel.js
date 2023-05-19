export async function buscandoLosMarvel() {
  try {
    //llamada a la API con un limite de 200
    const response = await fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=89d89bbcc96a5518b7045154acab2cd0&hash=bcd2343e53b65e1753264d81de0fa5f3&limit=30");
    const data = await response.json();
    
    const resultadosObtenidos = data.data.results;
  
    const resultadosFormateados = [];
  
    resultadosObtenidos.forEach((personaje) => {
      let personajeFormateado = {
        thumbnail: personaje.thumbnail,
        name: personaje.name,
        description: personaje.description

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
