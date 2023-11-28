/*
  Elabore um algoritmo que dada a idade de um nadador classifica-o em uma das seguintes categorias:
 
    infantil A = 5 - 7 anos

    infantil B = 8-10 anos

    juvenil A = 11-13 anos

    juvenil B = 14-17 anos

    adulto = maiores de 18 anos
    
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a idade do nadador: ', (idadeInput) => {
  // Converte a entrada para um número
  const idade = parseInt(idadeInput);

  // Verifica se a entrada é válida
  if (!isNaN(idade)) {
    // Classifica o nadador em uma das categorias
    if (idade >= 5 && idade <= 7) {
      console.log("Categoria: Infantil A");
    } else if (idade >= 8 && idade <= 10) {
      console.log("Categoria: Infantil B");
    } else if (idade >= 11 && idade <= 13) {
      console.log("Categoria: Juvenil A");
    } else if (idade >= 14 && idade <= 17) {
      console.log("Categoria: Juvenil B");
    } else if (idade >= 18) {
      console.log("Categoria: Adulto");
    } else {
      console.log("Nadador fora das categorias especificadas.");
    }
  } else {
    console.log("Por favor, insira uma idade válida.");
  }

  rl.close();
});
