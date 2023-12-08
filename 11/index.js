const nomes = [
  "Maria",
  "João",
  "José",
  "Antonio",
  "Beatriz",
  "Camila",
  "amanda",
];

const nomesEncontrados = nomes.filter((nome) => {
  const filtro = nome.slice(0, 1).toLowerCase() === "a";
  return filtro;
});

console.log(nomesEncontrados);