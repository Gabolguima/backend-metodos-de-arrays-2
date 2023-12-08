const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];
// const palavras = ["arroz", "feijão", "carne", "macarrão"];

const existeBebidaAlcoolica = palavras.some((conteudo) => {
  return conteudo === "cerveja" || conteudo === "vodka";
});

if (existeBebidaAlcoolica) {
  console.log("revise sua lista, joão. possui bebida com venda proibida!");
} else {
  console.log("tudo certo, vamos as compras!");
}