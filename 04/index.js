const numeros = [0, 122, 4, 6, 7, 8, 44];
// const numeros = [0, 122, 4, 6, 8, 44]; 

const numerosPares = numeros.every((numero) => {
  const resto = numero % 2 === 0;
  return resto;
});

if (numerosPares) {
  console.log("array válido");
} else {
  console.log("array inválido");
}