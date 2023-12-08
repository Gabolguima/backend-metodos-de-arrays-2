const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const numerosPares = numeros.filter((numero) => {
  const numerosParesFiltrados = numero % 2 === 0;
  return numerosParesFiltrados;
});

console.log(numerosPares);