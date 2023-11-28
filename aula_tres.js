const readline = require('readline');

// Função para realizar as verificações com base no número fornecido
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

// Chamando a função para obter a entrada do usuário
obterNumeroDoUsuario();
