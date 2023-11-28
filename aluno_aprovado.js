// Calcule a média aritmética das 3 notas de um aluno e mostre, além do valor da média, uma mensagem de "Aprovado", caso a média seja igual ou superior a 6, ou a mensagem "reprovado", caso contrário.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a primeira nota: ', (nota1) => {
  rl.question('Digite a segunda nota: ', (nota2) => {
    rl.question('Digite a terceira nota: ', (nota3) => {
      // Converte as entradas para números
      const nota1Float = parseFloat(nota1);
      const nota2Float = parseFloat(nota2);
      const nota3Float = parseFloat(nota3);

      // Verifica se as entradas são válidas
      if (!isNaN(nota1Float) && !isNaN(nota2Float) && !isNaN(nota3Float)) {
        // Calcula a média aritmética
        const mediaAritmetica = (nota1Float + nota2Float + nota3Float) / 3;
        
        console.log(`A média aritmética do aluno é: ${mediaAritmetica.toFixed(2)}`);

        // Verifica se o aluno foi aprovado ou reprovado
        if (mediaAritmetica >= 6) {
          console.log("Aprovado!");
        } else {
          console.log("Reprovado.");
        }
      } else {
        console.log("Por favor, insira notas válidas (números).");
      }

      rl.close();
    });
  });
});
