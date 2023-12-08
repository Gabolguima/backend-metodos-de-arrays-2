const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const arrayFormatado = frutas.map((fruta, indice) => {
  return `${indice} - ${fruta.slice(0, 1).toUpperCase()}${fruta.slice(1).toLowerCase()}`;
});

console.log(arrayFormatado);