const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculadora() {
  rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
      rl.question('Escolha a operação (+, -, *, /): ', (operacao) => {
        const numero1 = parseFloat(num1);
        const numero2 = parseFloat(num2);

        switch (operacao) {
          case '+':
            console.log(`Resultado: ${numero1 + numero2}`);
            break;
          case '-':
            console.log(`Resultado: ${numero1 - numero2}`);
            break;
          case '*':
            console.log(`Resultado: ${numero1 * numero2}`);
            break;
          case '/':
            if (numero2 !== 0) {
              console.log(`Resultado: ${numero1 / numero2}`);
            } else {
              console.log('Erro: Divisão por zero!');
            }
            break;
          default:
            console.log('Operação inválida.');
        }

        rl.close();
      });
    });
  });
}

calculadora();
