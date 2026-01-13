const express = require('express');
const { getCharactersWithAxios, getCharactersWithFetch } = require('./src/services/api');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/characters/axios', async (req, res) => {
  try {
    const data = await getCharactersWithAxios();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/characters/fetch', async (req, res) => {
  try {
    const data = await getCharactersWithFetch();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});