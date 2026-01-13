const axios = require('axios');
const { API_BASE_URL } = require('../../constants');

async function getCharactersWithAxios() {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/character`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar com Axios:', error.message);
    throw error;
  }
}

module.exports = {
  getCharactersWithAxios,
};