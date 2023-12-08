const pessoas = [
  {
    nome: "Antonio",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Maria",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Ana",
    idade: 21,
    profissao: "Programador",
  },
  {
    nome: "Beatriz",
    idade: 20,
    profissao: "Programador",
  },
  {
    nome: "José",
    idade: 32,
    profissao: "Jornalista",
  },
  {
    nome: "Marcos",
    idade: 30,
    profissao: "Programador",
  },
];

const programadoresMaioresDeVinteAnos = pessoas.filter((pessoa) => {
  const programador = pessoa.profissao === "Programador";
  const idadeMaiorQueVinte = pessoa.idade > 20;

  return programador && idadeMaiorQueVinte;
});

console.log(programadoresMaioresDeVinteAnos);

const jornalistasMaioresDeTrintaAnos = pessoas.filter((pessoa) => {
  const jornalista = pessoa.profissao === "Jornalista";
  const idadeMaiorQueTrinta = pessoa.idade > 30;

  return jornalista && idadeMaiorQueTrinta;
});

console.log(jornalistasMaioresDeTrintaAnos);

const jornalistasEProgramadoresJovens = pessoas.filter((pessoa) => {
  const jornalista = pessoa.profissao === "Jornalista";
  const programador = pessoa.profissao === "Programador";
  const idadeAteVinteENove = pessoa.idade <= 29;

  return (jornalista || programador) && idadeAteVinteENove;
});

console.log(jornalistasEProgramadoresJovens);