function buscarEndereço(cep) {
  const enderecos = [
    {
      cep: "00111222",
      rua: "Rua dos Artistas"
    },
    {
      cep: "00111333",
      rua: "Rua Augusta"
    },
    {
      cep: "00222444",
      rua: "Avenida Paralela"
    },
    {
      cep: 11222333,
      rua: "Rua Carlos Gomes"
    },
  ];

  //== Tive que mudar os 3 primeiros Ceps do enunciado da questão para Strings pelo erro de Sintaxe: Octal literals

  const enderecoEncontrado = enderecos.find((endereco) => {
    return endereco.cep === cep;
  });

  console.log(enderecoEncontrado.rua);
}

buscarEndereço("00222444");