const { API_BASE_URL } = require('../../constants');

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
  getCharactersWithFetch,
};