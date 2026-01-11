const axios = require("axios");

async function apiAxios() {
  const start = performance.now();

  await axios.get("https://rickandmortyapi.com/api/character");

  const end = performance.now();
  console.log(`Axios: ${(end - start).toFixed(2)} ms`);
}

apiAxios()