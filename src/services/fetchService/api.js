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

async function getCharactersWithFetchError() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/character`);

    if (!response.ok) {
      let errorBody = null;

      try {
        errorBody = await response.json();
      } catch (_) {
        errorBody = null;
      }

      const error = new Error(`Erro HTTP: ${response.status}`);
      error.status = response.status;
      error.body = errorBody;

      if (response.status === 401) {
        error.message = 'Unauthorized';
      }

      if (response.status === 500) {
        error.message = 'Internal server error';
      }

      throw error;
    }

    return await response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('[Fetch][Network Error]', error.message);
      throw new Error('Error connecting to the server');
    }

    if (error.status) {
      console.error('[Fetch][Response Error]', {
        status: error.status,
        body: error.body,
      });
      throw error;
    }

    console.error('[Fetch][Unknown Error]', error.message);
    throw error;
  }
}

module.exports = {
  getCharactersWithFetch,
  fetchWithInterceptor,
  getCharactersWithFetchError
};