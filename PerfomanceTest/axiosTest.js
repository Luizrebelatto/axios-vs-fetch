const axios = require("axios");
const { API_BASE_URL } = require("../src/constants");

async function apiAxios() {
  const start = performance.now();

  await axios.get(`${API_BASE_URL}/api/character`);

  const end = performance.now();
  console.log(`Axios: ${(end - start).toFixed(2)} ms`);
}

apiAxios()