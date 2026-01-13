const axios = require('axios');
const { API_BASE_URL } = require('../constants');

async function getCharactersWithAxios() {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/character`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar com Axios:', error.message);
    throw error;
  }
}

async function getCharactersWithFetch() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/character`);
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar com Fetch:', error.message);
    throw error;
  }
}

module.exports = {
  getCharactersWithAxios,
  getCharactersWithFetch,
};