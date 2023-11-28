const readline = require('readline');

// Função para realizar verificações com base no número fornecido
function verificarNumero(numero) {
  if (numero > 0) {
    console.log("O número é positivo.");

    if (numero % 2 === 0) {
      console.log("O número é par.");
    } else {
      console.log("O número é ímpar.");
    }

    if (numero >= 10 && numero <= 20) {
      console.log("O número está no intervalo de 10 a 20.");
    } else {
      console.log("O número não está no intervalo de 10 a 20.");
    }
  } else if (numero < 0) {
    console.log("O número é negativo.");
  } else {
    console.log("O número é zero.");
  }
}

// Função para exibir uma mensagem de boas-vindas
function exibirMensagemDeBoasVindas() {
  console.log("Bem-vindo ao programa de verificação de números!");
}

// Função para obter a entrada do usuário
function obterNumeroDoUsuario() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Digite um número: ', (numeroInput) => {
    const numero = parseFloat(numeroInput);

    if (!isNaN(numero)) {
      verificarNumero(numero);
    } else {
      console.log("Por favor, insira um número válido.");
    }

    rl.close();
  });
}

// Função principal que utiliza um bloco switch para chamar diferentes funções
function main() {
  exibirMensagemDeBoasVindas();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Escolha uma opção (1, 2, 3): ', (opcao) => {
    switch (opcao) {
      case '1':
        obterNumeroDoUsuario();
        break;
      case '2':
        console.log("Executando ação 2...");
        // Chame sua segunda função aqui
        break;
      case '3':
        console.log("Executando ação 3...");
        // Chame sua terceira função aqui
        break;
      default:
        console.log("Opção inválida.");
    }

    rl.close();
  });
}

// Chame a função principal para iniciar o programa
main();
