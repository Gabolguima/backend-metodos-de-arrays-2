const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const cidadesComAteOitoLetras = cidades.filter((cidade) => {
  const cidadesCorrespondentes = cidade.length <= 8;
  return cidadesCorrespondentes;
});

console.log(cidadesComAteOitoLetras);

const cidadesFormatadas = cidadesComAteOitoLetras.join(", ");
console.log(cidadesFormatadas);