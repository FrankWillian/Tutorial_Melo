const readline = require('readline');

function calcularBhaskara(a, b, c) {
  const delta = b ** 2 - 4 * a * c;

  if (delta < 0) {
    console.log("A equação não possui raízes reais.");
  } else if (delta === 0) {
    const x = -b / (2 * a);
    console.log(`A equação possui uma raiz real: x = ${x}`);
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`A equação possui duas raízes reais: x1 = ${x1} e x2 = ${x2}`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor de a: ', (a) => {
  rl.question('Digite o valor de b: ', (b) => {
    rl.question('Digite o valor de c: ', (c) => {
      // Converte as entradas para números
      const coeficienteA = parseFloat(a);
      const coeficienteB = parseFloat(b);
      const coeficienteC = parseFloat(c);

      // Verifica se as entradas são válidas
      if (!isNaN(coeficienteA) && !isNaN(coeficienteB) && !isNaN(coeficienteC)) {
        calcularBhaskara(coeficienteA, coeficienteB, coeficienteC);
      } else {
        console.log("Por favor, insira coeficientes válidos (números).");
      }

      rl.close();
    });
  });
});
