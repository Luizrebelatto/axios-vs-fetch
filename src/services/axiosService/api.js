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


module.exports = {
  getCharactersWithAxios,
  getCharactersWithAxiosInterceptor
};