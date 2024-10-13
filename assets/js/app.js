const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.querySelector('.name'); // se completo el nombre $name Esta definidos como clases, se agrego un punto
const $blog = document.querySelector('.blog');// se completo el nombre $blog Esta definidos como clases, se agrego un punto
const $location = document.querySelector('.location');// se completo el nombre $location Esta definidos como clases, se agrego un punto y se agrego la case en el html



async function displayUser (username) {
  $name.textContent = 'cargando...';

  let response = await fetch (`${usersEndpoint}/${username}`); 
 
  let data = await response.json(); // se cambio la respuesta a .json
  
  
  $name.textContent = (`${data.name}`); // Las comillas estan mal colocadas se cambiaron por las correctas
  $blog.textContent = (`${data.blog}`);// Las comillas estan mal colocadas se cambiaron por las correctas
  $location.textContent = (`${data.location}`);// Las comillas estan mal colocadas se cambiaron por las correctas
}

function handleError(err) {
  console.log("OH NO!");
  console.log(err);
  $name.textContent = `Algo salió mal: ${err}`//n no esta definida, pero "$nombre" si.
}

displayUser('stolinski').catch(handleError);

