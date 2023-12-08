const palavras = ["livro", "caneta", "sol", "carro", "orelha"];
// const palavras = ["livro", "sol", "carro"];

const palavraInvalida = palavras.some((valor) => {
  return valor.length > 5;
});

if (palavraInvalida) {
  console.log("existe palavra inválida");
} else {
  console.log("array validado");
}
