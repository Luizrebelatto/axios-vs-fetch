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

async function fetchWithInterceptor(url, options = {}) {
  const method = options.method ? options.method.toUpperCase() : 'GET';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer fake-token',
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  const status = response.status;

  return response.json();
}

module.exports = {
  getCharactersWithFetch,
  fetchWithInterceptor
};