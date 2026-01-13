const { API_BASE_URL } = require("../src/constants");

async function apiFetch() {
  const start = performance.now();

  const response = await fetch(`${API_BASE_URL}/api/character`);
  await response.json();

  const end = performance.now();
  console.log(`Fetch: ${(end - start).toFixed(2)} ms`);
}
apiFetch()
