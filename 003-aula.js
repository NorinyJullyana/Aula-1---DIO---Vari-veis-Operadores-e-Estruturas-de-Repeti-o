const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nota1;
let nota2;
let nota3;

rl.question('Qual o sua nota 1? ', (nota1Input) => {
    nota1 = parseFloat(nota1Input);

    rl.question('Qual o sua nota 2? ', (nota2Input) => {
        nota2 = parseFloat(nota2Input);
    
        rl.question('Qual o sua nota 3? ', (nota3Input) => {
            nota3 = parseFloat(nota3Input);

            const media = (nota1 + nota2 + nota3) / 3;
            
            if(media < 5) {
                console.log('Reprovado');
            
            } else if(media >= 5 && media < 7) {
                
                console.log('Recuperação');
            
            } else {
                
                console.log('Aprovado');
            
            }
            
            rl.close();
        });
    });
});
