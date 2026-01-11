async function apiFetch() {
  const start = performance.now();

  const response = await fetch("https://rickandmortyapi.com/api/character");
  await response.json();

  const end = performance.now();
  console.log(`Fetch: ${(end - start).toFixed(2)} ms`);
}
apiFetch()
