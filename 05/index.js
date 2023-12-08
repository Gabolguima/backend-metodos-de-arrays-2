const usuarios = [
  {
    nome: "André",
    idade: 29,
    habilitado: false, // habilitado: true = Cai no IF
  },
  {
    nome: "Marcos",
    idade: 70,
    habilitado: true,
  },
  {
    nome: "Ana",
    idade: 35,
    habilitado: true,
  },
  {
    nome: "Vinícius",
    idade: 44,
    habilitado: true,
  },
  {
    nome: "Carlos",
    idade: 17,
    habilitado: false,
  },
  {
    nome: "Maria",
    idade: 19,
    habilitado: true,
  },
];

const usuariosFaixaEtaria = usuarios.filter((usuario) => {
  const maiorQueDezoito = usuario.idade >= 18;
  const menorQueSessentaECinco = usuario.idade <= 65;

  return maiorQueDezoito && menorQueSessentaECinco;
});

const todosHabilitados = usuariosFaixaEtaria.every((usuario) => {
  return usuario.habilitado === true;
});

if (todosHabilitados) {
  console.log("todos passaram no teste");
} else {
  console.log("todos precisam estar habilitados");
}