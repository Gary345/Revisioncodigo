const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//cambiar name por .name para obtener 
const $n = document.querySelector('.name');
//cambiar #blog por .blog 
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  //agregar modificador async 
  const response = (await fetch(`${usersEndpoint}/${username}`));
  console.log(data);
//cambiar ' por backticks ` `
  $n.textContent = `${data.username}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //poner $ a n            y ;  al finalizar la linea
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);