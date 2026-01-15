const axios = require('axios');
const { API_BASE_URL } = require('../../constants');

const apiWithInterceptor = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

apiWithInterceptor.interceptors.request.use(
  (config) => {
    config.headers.Authorization = 'Bearer fake-token';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiWithInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

async function getCharactersWithAxiosInterceptor() {
  const response = await apiWithInterceptor.get('/api/character');
  return response.data;
}

async function getCharactersWithAxios() {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/character`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar com Axios:', error.message);
    throw error;
  }
}

async function getCharactersWithAxiosErrors() {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/character`, {
      headers: {
        Authorization: 'Bearer fake-token',
      },
      timeout: 5000,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('[Axios][Response Error]', {
        status: error.response.status,
        data: error.response.data,
      });

      if (error.response.status === 401) {
        throw new Error('Unauthorized access');
      }

      if (error.response.status === 500) {
        throw new Error('Internal server error');
      }
    }

    if (error.request) {
      console.error('[Axios][Network Error]', error.message);
      throw new Error('Error connecting to the server');
    }

    console.error('[Axios][Unknown Error]', error.message);
    throw error;
  }
}


module.exports = {
  getCharactersWithAxios,
  getCharactersWithAxiosInterceptor,
  getCharactersWithAxiosErrors
};