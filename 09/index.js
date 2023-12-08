const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const numerosPositivos = numeros.filter((numero) => {
  const numerosFiltrados = numero > 0;
  return numerosFiltrados;
});

console.log(numerosPositivos);