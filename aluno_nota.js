// Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é: 2,3 e 5, respectivamente.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a primeira nota: ', (nota1) => {
  rl.question('Digite a segunda nota: ', (nota2) => {
    rl.question('Digite a terceira nota: ', (nota3) => {
      // Converte as entradas para números
      const pesoNota1 = 2;
      const pesoNota2 = 3;
      const pesoNota3 = 5;

      const nota1Float = parseFloat(nota1);
      const nota2Float = parseFloat(nota2);
      const nota3Float = parseFloat(nota3);

      // Verifica se as entradas são válidas
      if (!isNaN(nota1Float) && !isNaN(nota2Float) && !isNaN(nota3Float)) {
        // Calcula a média ponderada
        const mediaPonderada = (nota1Float * pesoNota1 + nota2Float * pesoNota2 + nota3Float * pesoNota3) / (pesoNota1 + pesoNota2 + pesoNota3);
        
        console.log(`A média final do aluno é: ${mediaPonderada.toFixed(2)}`);
      } else {
        console.log("Por favor, insira notas válidas (números).");
      }

      rl.close();
    });
  });
});
